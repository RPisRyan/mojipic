// import { DrawingSize, Drawing, emptyDrawing, drawingWriter, getCells, getContentRegion } from './drawingFunctions'

// type DrawingSelection = {
//   top: number,
//   bottom: number,
//   left: number,
//   right: number
// }

// export function selectionMeasure(selection: DrawingSelection): DrawingSize {
//   return {
//     get width() {
//       return selection.right - selection.left
//     },
//     get height() {
//       return selection.bottom - selection.top
//     }
//   }
// }

// export function applySelection(source: Drawing, selection: DrawingSelection): Drawing {
//   const measure = selectionMeasure(selection)
//   const drawing = emptyDrawing(measure)
//   const write = drawingWriter(
//     drawing,
//     { row: selection.top, col: selection.left }
//   )
//   getCells(source).forEach(write)
//   return drawing
// }

// export function selectContent(drawing: Drawing): DrawingSelection {
//   const region = getContentRegion(drawing)
//   return {
//     top: region.rowRange[0],
//     bottom: region.rowRange[1],
//     left: region.columnRange[0],
//     right: region.rowRange[1],
//   }
// }
