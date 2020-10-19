import produce from 'immer'
import { createStore, addNamedDispatch } from '../../packs/essential-store/store'
import { useStoreWithNamedDispatch } from '../../packs/essential-store/useStore'
import {
  CellPosition, cloneDrawing, Drawing, DrawingBounds, emptyDrawing,
  emptyGlyph, getDrawingBounds, getPositionEdges,
  Glyph, isInnerPosition, isWithinBounds, padDrawing, trimDrawing
} from '../../domain/drawing'

export const minDrawingSize = 3
export const maxDrawingSize = 15
export const minDrawingBounds: DrawingBounds = { rows: 3, columns: 3 }
export const maxDrawingBounds: DrawingBounds = { rows: 8, columns: 12 }

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
        const bounds = getDrawingBounds(state.drawing)
        if (!isWithinBounds(position, bounds)) {
          return
        }

        draft.history.push(state.drawing)

        if (isInnerPosition(position, bounds)) {
          draft.drawing[row][col] = glyph
        } else {
          const edges = getPositionEdges(position, bounds)
          let drawing = cloneDrawing(state.drawing)
          drawing[row][col] = glyph
          // We could be more efficient when painting at the edges,
          //  if we pre-calculated array changes required.
          draft.drawing = padDrawing(edges, drawing, maxDrawingBounds)
        }
      })
    case 'eraseCell':
      return produce(state, draft => {
        const { position } = action
        const { row, col } = position
        const bounds = getDrawingBounds(state.drawing)
        if (!isWithinBounds(position, bounds)) {
          return
        }
        draft.history.push(state.drawing)
        if (getPositionEdges(position, bounds).size > 0) {
          const drawing = cloneDrawing(state.drawing)
          drawing[row][col] = emptyGlyph
          draft.drawing = trimDrawing(drawing, minDrawingSize)
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
