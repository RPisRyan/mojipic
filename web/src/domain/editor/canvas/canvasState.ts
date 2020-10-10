import { Drawing, emptyDrawing, Glyph } from './drawing'

export const minDrawingSize = 3
export const maxDrawingSize = 15

export type DrawingCanvasState = {
  drawing: Drawing,
  history: Drawing[],
}

export function initialCanvasState(): DrawingCanvasState {
  return {
    drawing: emptyDrawing({ rows: minDrawingSize, columns: minDrawingSize }),
    history: [],
  }
}
