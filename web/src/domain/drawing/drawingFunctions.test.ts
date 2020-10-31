// import { blankChar } from '../../util/charUtil'
// import { DrawingRegion, getContentRegion, drawingFromString } from './drawingFunctions'

// test('getContentRegion', () => {
//   const drawing = makeDrawing(`
//   --A----
//   -B-----
//   ----C--
//   ---D---
//   -------
//   -------`)
//   const expected: DrawingRegion = {
//     rowRange: [0, 3],
//     columnRange: [1, 4]
//   }
//   expect(getContentRegion(drawing))
//     .toEqual(expected)
// })

// function makeDrawing(dashedString: string) {
//   const cleanedInput = dashedString.trim()
//     .split('\n')
//     .map(it => it.trim())
//     .join('\n')
//   return drawingFromString(
//     replaceAll(cleanedInput, '-', blankChar)
//   )
// }

// function replaceAll(value: string, test: string, replacement: string) {
//   if (!value) {
//     return value
//   }
//   return value.split(test).join(replacement)
// }
