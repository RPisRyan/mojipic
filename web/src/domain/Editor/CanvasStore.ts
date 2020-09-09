import { CellPosition, Drawing, DrawingSize, emptyDrawing, getDrawingSize } from './Drawing'
import { Tool } from './types'
import produce from 'immer'
import { useReducer, Dispatch } from 'react'

export type CanvasState = {
  drawing: Drawing,
  history: Drawing[],
  tool: Tool
}

export function emptyCanvasState(): CanvasState {
  return {
    drawing: emptyDrawing({ rows: 3, columns: 3 }),
    history: [],
    tool: { type: 'pointer' },
  }
}

export function useNewCanvasStore() {
  const [state, dispatch] = useReducer(canvasReduce,
    emptyCanvasState())
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
    pickTool(tool: Tool) {
      dispatch({ action: 'pickTool', tool })
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
  { action: 'pickTool', tool: Tool }
  | { action: 'applyTool', cell: CellPosition }
  | { action: 'setDrawing', drawing: Drawing }
  | { action: 'clear' }
  | { action: 'undo' }

function captureHistory(state): Drawing[] {
  return [state.history, state.drawing] // todo: truncate
}

function canvasReduce(state: CanvasState, action: CanvasAction) {
  switch (action.action) {
    case 'pickTool':
      return {
        ...state,
        tool: action.tool
      }
    case 'applyTool':
      return {
        ...state,
        history: captureHistory(state),
        drawing: applyTool(state.tool, action.cell, state.drawing)
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
    case 'erase':
      return emptyDrawing(getDrawingSize(drawing))
  }
}
