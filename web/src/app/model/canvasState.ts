import produce from 'immer'
import { createStore, addNamedDispatch } from '../../packs/essential-store/store'
import { useStoreWithNamedDispatch } from '../../packs/essential-store/useStore'
import {
  CellPosition, cloneDrawing, Drawing, DrawingSize, emptyDrawing,
  emptyGlyph, getDrawingSize, getPositionEdges,
  Glyph, isInnerPosition, isWithinBounds, padDrawing, trimDrawing
} from '../../domain/drawing'

export const minDrawingSize = 5
export const minDrawingBounds: DrawingSize = {
  rows: minDrawingSize,
  columns: minDrawingSize
}
export const maxDrawingBounds: DrawingSize = { rows: 8, columns: 12 }

export type CanvasState = {
  drawing: Drawing,
  history: Drawing[],
}

export type CanvasAction =
  { type: 'setDrawing', drawing: Drawing }
  | { type: 'paintCell', glyph: Glyph, position: CellPosition }
  | { type: 'eraseCell', position: CellPosition }
  | { type: 'undo' }
  | { type: 'clear' }

function initialState(): CanvasState {
  return {
    drawing: emptyDrawing({ rows: minDrawingSize, columns: minDrawingSize }),
    history: [],
  }
}

function reduce(state: CanvasState, action: CanvasAction) {
  switch (action.type) {
    case 'setDrawing':
      return {
        drawing: action.drawing,
        history: [...state.history, state.drawing]
      }
    case 'paintCell':
      return produce(state, draft => {
        const { glyph, position } = action
        const { row, col } = position
        const bounds = getDrawingSize(state.drawing)
        if (!isWithinBounds(position, bounds)) {
          return
        }

        draft.history.push(state.drawing)

        if (isInnerPosition(position, bounds)) {
          draft.drawing[row][col] = glyph
        } else {
          // const edges = getPositionEdges(position, bounds)
          let drawing = cloneDrawing(state.drawing)
          drawing[row][col] = glyph
          draft.drawing = padDrawing(drawing, maxDrawingBounds)
        }
      })
    case 'eraseCell':
      return produce(state, draft => {
        const { position } = action
        const { row, col } = position
        const bounds = getDrawingSize(state.drawing)
        if (!isWithinBounds(position, bounds)) {
          return
        }
        draft.history.push(state.drawing)
        if (getPositionEdges(position, bounds).size > 0) {
          const drawing = cloneDrawing(state.drawing)
          drawing[row][col] = emptyGlyph
          draft.drawing = trimDrawing(drawing)
        } else {
          draft.drawing[row][col] = emptyGlyph
        }
      })
    case 'undo':
      if (state.history.length === 0) {
        return state
      }
      return produce(state, draft => {
        const popped = draft.history.pop()
        if (popped) {
          draft.drawing = popped
        }
      })
    case 'clear':
      return produce(state, draft => {
        draft.history.push(state.drawing)
        draft.drawing = emptyDrawing(minDrawingBounds)
      })
  }
}

export const canvasStore = addNamedDispatch(
  createStore(initialState(), reduce)
)

export const useCanvasState = () => useStoreWithNamedDispatch(canvasStore) 
