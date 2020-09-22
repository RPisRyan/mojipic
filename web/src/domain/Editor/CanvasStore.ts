import {
  CellPosition, Drawing, emptyDrawing, getDrawingSize, emptyGlyph,
  Glyph, PaintbrushTool, isWithinDrawing, expandToInclude, trimDrawing, drawingsAreEqual,
  Tool
} from './Drawing'
import produce from 'immer'
import { useReducer, Dispatch } from 'react'

type ToolType = Tool['type']

export const minDrawingSize = 3
export const maxDrawingSize = 15
const defaultBrush = '👍'

export type CanvasState = {
  drawing: Drawing,
  history: Drawing[],
  tools: { [key in Tool['type']]: Tool },
  activeToolType: Tool['type'],
  recent: Glyph[]
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

export function useNewCanvasStore() {
  const [state, dispatch] = useReducer(canvasReduce, emptyCanvasState())
  return createCanvasStore(state, dispatch)
}

export function createCanvasStore(
  state: CanvasState, dispatch: Dispatch<CanvasAction>) {
  return {
    ...state,
    canUndo: state.history.length > 0,
    undo() {
      dispatch({ action: 'undo' })
    },
    activateTool(type: Tool['type']) {
      dispatch({ action: 'activateTool', type })
    },
    setBrush(brush: Glyph) {
      dispatch({
        action: 'setTool',
        tool: { type: 'paint', brush: brush }
      })
      dispatch({
        action: 'addRecent',
        recent: [brush]
      })
    },
    get activeTool() {
      return state.tools[state.activeToolType]
    },
    get brush() {
      return (state.tools['paint'] as PaintbrushTool).brush
    },
    applyTool(cell: CellPosition) {
      dispatch({ action: 'applyTool', cell })
    },
    setDrawing(drawing: Drawing) {
      dispatch({ action: 'setDrawing', drawing })
    },
    clear() {
      dispatch({ action: 'clear' })
    },
    addRecent(recent: Glyph[]) {
      dispatch({ action: 'addRecent', recent: recent.filter(it => it !== emptyGlyph) })
    }

  }
}

export type CanvasStore = ReturnType<typeof createCanvasStore>

export type CanvasAction =
  { action: 'activateTool', type: Tool['type'] }
  | { action: 'setTool', tool: Tool }
  | { action: 'applyTool', cell: CellPosition }
  | { action: 'setDrawing', drawing: Drawing }
  | { action: 'clear' }
  | { action: 'undo' }
  | { action: 'addRecent', recent: Glyph[] }

function captureHistory(state: CanvasState): Drawing[] {
  if (state.history.length > 0 && drawingsAreEqual(state.drawing, state.history[0])) {
    return state.history
  }
  return [state.drawing, ...state.history] // todo: truncate
}

function canvasReduce(state: CanvasState, action: CanvasAction): CanvasState {
  // console.log('canvasReduce', state, action)

  switch (action.action) {
    case 'activateTool':
      return {
        ...state,
        activeToolType: action.type
      }
    case 'setTool':
      return produce(state, draft => {
        draft.tools[action.tool.type] = action.tool
      })
    case 'applyTool':
      const tool = state.tools[state.activeToolType]
      if (!tool) return state
      return {
        ...state,
        history: captureHistory(state),
        drawing: applyTool(
          tool,
          action.cell,
          state.drawing
        )
      }
    case 'setDrawing':
      return {
        ...state,
        drawing: action.drawing,
        history: []
      }
    case 'clear':
      return {
        ...state,
        history: captureHistory(state),
        drawing: emptyDrawing({ rows: minDrawingSize, columns: minDrawingSize })
      }
    case 'undo':
      if (state.history.length === 0) {
        return state
      }
      const [drawing, ...history] = state.history
      return {
        ...state,
        drawing,
        history
      }
    case 'addRecent':
      const set = new Set([...action.recent, ...state.recent])
      return {
        ...state,
        recent: Array.from(set)
      }
  }
}

function applyTool(tool: Tool, position: CellPosition, drawing: Drawing): Drawing {
  const isWithin = isWithinDrawing(position, drawing)

  switch (tool.type) {
    case 'paint':
      const { row, col } = position
      if (isWithin) {
        return produce(drawing, draft => {
          draft[row][col] = tool.brush
        })
      }

      const size = getDrawingSize(drawing)
      if (size.columns >= maxDrawingSize || size.rows >= maxDrawingSize) {
        // if either direction is maxed, do nothing
        return drawing
      }

      const newDrawing = expandToInclude(position, drawing)
      if (newDrawing) {
        return produce(newDrawing, draft => {
          draft[Math.max(0, row)][Math.max(0, col)] = tool.brush
        })
      }
    case 'eraser':
      if (isWithin) {
        const { row, col } = position
        const newDrawing = produce(drawing, draft => {
          draft[row][col] = emptyGlyph
        })
        return trimDrawing(newDrawing, minDrawingSize)
      }
      return drawing
    default:
      return drawing
  }
}
