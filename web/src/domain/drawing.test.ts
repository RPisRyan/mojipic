import { maxDrawingBounds } from '../app/model/canvasState'
import { blankChar } from '../util/charUtil'
import { Drawing, drawingFromString, DrawingRegion, drawingToString, getContentRegion, padDrawing } from './drawing'

test('getContentRegion', () => {
  const drawing = makeDrawing(`
--A----
-B-----
----C--
---D---
-------
-------`)
  const expected: DrawingRegion = {
    rowRange: [0, 3],
    columnRange: [1, 4]
  }
  expect(getContentRegion(drawing))
    .toEqual(expected)
})

test('padDrawing', () => {
  const drawing = makeDrawing(`
--A--
-B---
----C
---D-
-----`)
  const expected = makeDrawing(`
  ------
  --A---
  -B----
  ----C-
  ---D--
  ------`)
  expectDrawingsAreEqual(expected, padDrawing(drawing, maxDrawingBounds))
})

function expectDrawingsAreEqual(expected: Drawing, actual: Drawing) {
  expect(drawingToString(actual))
    .toEqual(drawingToString(expected))
}

function makeDrawing(dashedString: string) {
  return drawingFromString(
    replaceAll(dashedString.trim(), '-', blankChar)
  )
}

function replaceAll(value: string, test: string, replacement: string) {
  if (!value) {
    return value
  }
  return value.split(test).join(replacement)
}