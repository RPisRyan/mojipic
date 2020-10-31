// import { times } from '../../util/functionUtil'
// import { Drawing, DrawingSize, getContentRegion, extractRegion, drawingToString } from './drawingFunctions'
// import { selectContent, selectionMeasure, applySelection } from './drawingSelection'

// export function padDrawing(
//   drawing: Drawing,
//   minBounds: DrawingSize,
//   maxBounds: DrawingSize
// ): Drawing {
//   const selection = selectContent(drawing)
//   const measure = selectionMeasure(selection)

//   if (measure.height < maxBounds.height) selection.top--
//   if (measure.height < maxBounds.height) selection.bottom++
//   if (measure.width < maxBounds.width) selection.right++
//   if (measure.width < maxBounds.width) selection.left--

//   times(minBounds.height - measure.height)(() => selection.top++)
//   times(minBounds.width - measure.width)(() => selection.right++)

//   return applySelection(drawing, selection)
// }

// export function trimDrawing(drawing: Drawing) {
//   // console.log(drawingToString(drawing))/////
//   const contentRegion = getContentRegion(drawing)
//   const result = extractRegion(drawing, contentRegion)
//   // console.log(drawingToString(result))/////
//   return result
// }

// export function drawingsAreEqual(a: Drawing | null, b: Drawing | null) {
//   if (a == null || b == null) {
//     return false
//   }
//   if (a === b) {
//     return true
//   }
//   return drawingToString(a) === drawingToString(b)
// }
