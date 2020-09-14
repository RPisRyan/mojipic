import {
  CellPosition, Drawing, emptyDrawing, getDrawingSize, emptyGlyph,
  Glyph, PaintbrushTool, isWithinDrawing, expandToInclude, trimDrawing
} from './Drawing'
import { Tool } from "./Drawing"
import produce from 'immer'
import { useReducer, Dispatch } from 'react'

type ToolType = Tool['type']

const minDrawingSize = 3
const maxDrawingSize = 15
const defaultBrush = '👍'

export type CanvasState = {
  drawing: Drawing,
  history: Drawing[],
  tools: { [key in Tool['type']]: Tool },
  activeToolType: Tool['type']
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

function captureHistory(state: CanvasState): Drawing[] {
  return [...state.history, state.drawing] // todo: truncate
}

function canvasReduce(state: CanvasState, action: CanvasAction): CanvasState {
  console.log('canvasReduce', state, action)

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
        drawing: emptyDrawing(getDrawingSize(state.drawing))
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
