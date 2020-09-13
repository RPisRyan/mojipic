import { CellPosition, Drawing, emptyDrawing, getDrawingSize, emptyGlyph, Glyph, PaintbrushTool } from './Drawing'
import { Tool } from "./Drawing"
import produce from 'immer'
import { useReducer, Dispatch } from 'react'

type ToolType = Tool['type']

export type CanvasState = {
  drawing: Drawing,
  history: Drawing[],
  tools: { [key in Tool['type']]: Tool },
  activeToolType: Tool['type']
}

export function emptyCanvasState(): CanvasState {
  return {
    drawing: emptyDrawing({ rows: 3, columns: 3 }),
    history: [],
    tools: {
      paint: { type: 'paint', brush: '👍' },
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

function applyTool(tool: Tool, cell: CellPosition, drawing: Drawing): Drawing {
  switch (tool.type) {
    case 'paint':
      return produce(drawing, draft => {
        draft[cell[0]][cell[1]] = tool.brush
      })
    case 'eraser':
      return produce(drawing, draft => {
        draft[cell[0]][cell[1]] = emptyGlyph
      })
    default:
      return drawing
  }
}
