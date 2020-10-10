import type { Draft } from 'immer/dist/internal'
import { DrawingCanvasState, maxDrawingSize, minDrawingSize } from './canvasState'
import { CellPosition, Drawing, expandToInclude, Glyph, isWithinDrawing, trimDrawing } from './drawing'

export function havingDrawing(
  drawing: Drawing
) {
  return (draft: Draft<DrawingCanvasState>) => {
    draft.drawing = drawing
  }
}

export function havingGlyphAt(
  glyph: Glyph,
  position: CellPosition
) {
  const { row, col } = position
  return (draft: Draft<DrawingCanvasState>) => {
    const isWithin = isWithinDrawing(position, draft.drawing)
    if (isWithin) {
      draft.drawing[row][col] = glyph
    } else {
      const newDrawing = expandToInclude(position, draft.drawing.map(it => [...it]))
      // This is too coupled to the behavior of expandToInclude.
      // It is expecting the coordinate system to shift just so.
      newDrawing[Math.max(0, row)][Math.max(0, col)] = glyph
      draft.drawing = newDrawing
    }
  }
}

export function havingTrimmedDrawing() {
  return (draft: Draft<DrawingCanvasState>, current: DrawingCanvasState) => {
    draft.drawing = trimDrawing(current.drawing.map(it => [...it]), minDrawingSize)
  }
}

export function havingPushedDrawingHistory() {
  return (draft: Draft<DrawingCanvasState>, current: DrawingCanvasState) => {
    draft.history.push(current.drawing)
  }
}

export function havingUndoneDrawing() {
  return (draft: Draft<DrawingCanvasState>) => {
    const popped = draft.history.pop()
    if (popped) {
      draft.drawing = popped
    }
  }
}
