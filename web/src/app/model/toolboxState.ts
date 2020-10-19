import produce, { Draft } from 'immer'
import { addNamedDispatch, createStore, storeWithView as addView } from '../../packs/essential-store/store'
import type { Glyph } from '../../domain/drawing'
import { useStoreWithNamedDispatch } from '../../packs/essential-store/useStore'

const defaultBrush = '👍'

export type PaintbrushTool = { type: 'paint'; brush: Glyph }
export type EraserTool = { type: 'eraser' }

export type Tool = PaintbrushTool | EraserTool
export type ToolType = Tool['type']
export type ToolLookup = { [K in ToolType]: Extract<Tool, { type: K }> }

export type ToolboxState = {
  tools: { [key in Tool['type']]: Tool },
  activeToolType: Tool['type'],
  recent: Glyph[]
}

export type ToolboxAction =
  { type: 'havingBrush', brush: Glyph }
  | { type: 'havingActive', tool: ToolType }
  | { type: 'addRecent', glyphs: Glyph[] }

function initialState(): ToolboxState {
  return {
    tools: {
      paint: { type: 'paint', brush: defaultBrush },
      eraser: { type: 'eraser' },
    },
    activeToolType: 'paint',
    recent: [defaultBrush]
  }
}

function createView(state: ToolboxState) {
  return {
    ...state,
    get brush() {
      return (state.tools['paint'] as PaintbrushTool).brush
    }
  }
}

function reduce(state: ToolboxState, action: ToolboxAction) {
  function addRecent(draft: Draft<ToolboxState>, glyphs: Glyph[]) {
    draft.recent = Array.from(new Set([...glyphs, ...state.recent]))
  }
  switch (action.type) {
    case 'havingBrush':
      return produce(state, draft => {
        (draft.tools.paint as PaintbrushTool).brush = action.brush
        addRecent(draft, [action.brush])
      })
    case 'havingActive':
      return produce(state, draft => {
        draft.activeToolType = action.tool
      })
    case 'addRecent':
      return produce(state, draft => {
        addRecent(draft, action.glyphs)
      })
  }
}

export const toolboxStore = addNamedDispatch(
  addView(
    createStore(initialState(), reduce),
    createView
  )
)

export const useToolboxState = () => useStoreWithNamedDispatch(toolboxStore)
