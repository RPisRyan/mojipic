import { DispatchStateUpdates, useStoreWithViews } from '../../common/hookedState'
import {
  CellPosition, Drawing, emptyDrawing, emptyGlyph, expandToInclude,
  getDrawingSize, Glyph, isWithinDrawing, trimDrawing
} from './Drawing'

export type PaintbrushTool = { type: 'paint'; brush: Glyph }
export type EraserTool = { type: 'eraser' }
export type Tool = PaintbrushTool | EraserTool
export type ToolType = Tool['type']
export type ToolLookup = { [K in ToolType]: Extract<Tool, { type: K }> }

export const minDrawingSize = 3
export const maxDrawingSize = 15
const defaultBrush = '👍'

export function useNewCanvasStore() {
  return useStoreWithViews(canvasViews, canvasActions, emptyCanvasState())
}

export type CanvasState = {
  drawing: Drawing,
  history: Drawing[],
  tools: { [key in Tool['type']]: Tool },
  activeToolType: Tool['type'],
  recent: Glyph[]
}

export function canvasViews(state: CanvasState) {
  return {
    get brush() {
      return (state.tools.paint as PaintbrushTool).brush
    }
  }
}

export type CanvasStore = CanvasState
  & ReturnType<typeof canvasViews>
  & ReturnType<typeof canvasActions>

export function canvasActions(dispatch: DispatchStateUpdates<CanvasState>) {
  function setDrawing(drawing: Drawing) {
    dispatch(draft => {
      draft.drawing = drawing
    })
  }

  function addRecent(glyphs: Glyph[]) {
    dispatch(draft => {
      draft.recent = Array.from(new Set([...glyphs, ...draft.recent]))
    })
  }

  function activateTool(type: ToolType) {
    dispatch(draft => {
      draft.activeToolType = type
    })
  }

  function pickBrush(brush: Glyph) {
    if (brush === emptyGlyph) {
      return
    }
    dispatch(draft => {
      (draft.tools.paint as PaintbrushTool).brush = brush
    })
    activateTool('paint')
    addRecent([brush])
  }

  function applyTool(position: CellPosition) {
    dispatch(draft => {
      const { drawing, tools, activeToolType } = draft
      const isWithin = isWithinDrawing(position, drawing)
      draft.history.push(draft.drawing)
      switch (draft.activeToolType) {
        case 'paint':
          const { row, col } = position
          const brush = (tools[activeToolType] as PaintbrushTool).brush
          if (isWithin) {
            drawing[row][col] = brush
          }

          const size = getDrawingSize(drawing)
          if (size.columns >= maxDrawingSize || size.rows >= maxDrawingSize) {
            // if either direction is maxed, do nothing
            return
          }

          const newDrawing = expandToInclude(position, drawing)
          if (newDrawing) {
            newDrawing[Math.max(0, row)][Math.max(0, col)] = brush
            draft.drawing = newDrawing
          }

          break
        case 'eraser':
          if (isWithin) {
            const { row, col } = position
            drawing[row][col] = emptyGlyph
            draft.drawing = trimDrawing(drawing, minDrawingSize)
          }
      }
    })
  }

  function undo() {
    dispatch(draft => {
      if (draft.history.length > 0) {
        draft.drawing = draft.history.pop()!
      }
    })
  }

  function clear() {
    dispatch(draft => {
      draft.history.push(draft.drawing)
      draft.drawing = emptyDrawing({
        rows: minDrawingSize,
        columns: minDrawingSize
      })
    })
  }

  return {
    setDrawing,
    addRecent,
    activateTool,
    pickBrush,
    applyTool,
    undo,
    clear
  }
}

export function emptyCanvasState(): CanvasState {
  return {
    drawing: emptyDrawing({ rows: minDrawingSize, columns: minDrawingSize }),
    history: [],
    tools: {
      paint: { type: 'paint', brush: defaultBrush },
      eraser: { type: 'eraser' },
    },
    activeToolType: 'paint',
    recent: [defaultBrush]
  }
}
