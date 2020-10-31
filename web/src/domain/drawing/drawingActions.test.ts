// import { maxDrawingBounds, minDrawingBounds } from '../../app/model/canvasState'
// import { blankChar } from '../../util/charUtil'
// import { padDrawing, trimDrawing } from './drawingActions'
// import { Drawing, drawingToString, drawingFromString } from './drawingFunctions'

// test('padDrawing', () => {
//   const drawing = makeDrawing(`
//   --A--
//   -B---/*  */
//   ----C
//   ---D-
//   -----`)
//   const expected = makeDrawing(`
//   ------
//   --A---
//   -B----
//   ----C-
//   ---D--
//   ------`)
//   expectDrawingsAreEqual(expected, padDrawing(drawing, minDrawingBounds, maxDrawingBounds))
// })

// test('trimDrawing', () => {
//   const drawing = makeDrawing(`
//   ------
//   --A---
//   -B----
//   ----C-
//   ---D--
//   ------`)
//   const expected = makeDrawing(`
//   -A--
//   B---
//   ---C
//   --D-
//   `)
//   expectDrawingsAreEqual(expected, trimDrawing(drawing))
// })

// function expectDrawingsAreEqual(expected: Drawing, actual: Drawing) {
//   expect(drawingToString(actual))
//     .toEqual(drawingToString(expected))
// }

// function makeDrawing(dashedString: string) {
//   return drawingFromString(
//     replaceAll(
//       dashedString.trim()
//         .split('\n')
//         .map(it => it.trim)
//         .join('\n'),
//       '-',
//       blankChar)
//   )
// }

// function replaceAll(value: string, test: string, replacement: string) {
//   if (!value) {
//     return value
//   }
//   return value.split(test).join(replacement)
// }
