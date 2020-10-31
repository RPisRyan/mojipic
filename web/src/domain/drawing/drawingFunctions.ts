// import GraphemeSplitter from 'grapheme-splitter'
// import { blankChar } from '../../util/charUtil'
// import { Glyph, emptyGlyph, glyphHasValue } from './glyph'
// import { IndexRange, emptyRange, NumberRange, isValidRange } from './numericRange'

// export type DrawingSize = {
//   height: number,
//   width: number
// }

// export type DrawingRegion = {
//   rowRange: IndexRange,
//   columnRange: IndexRange
// }

// export type DrawingEdge = 'top' | 'bottom' | 'left' | 'right'

// export const emptyRegion: DrawingRegion = {
//   rowRange: emptyRange,
//   columnRange: emptyRange
// }

// export function emptyDrawing({ height, width }: DrawingSize) {
//   return Array.from(new Array(height), () =>
//     Array.from(new Array(width),
//       () => null)
//   )
// }

// export function getDrawingSize(drawing: GlyphArray): DrawingSize {
//   return {
//     height: drawing.length,
//     width: Math.max(...drawing.map(it => it.length))
//   }
// }

// export function boundsEqual(a: DrawingSize, b: DrawingSize) {
//   return a.height === b.height && a.width === b.width
// }

// export function isWithinBounds(position: CellPosition, bounds: DrawingSize) {
//   const { row, col } = position
//   const { height: rows, width: columns } = bounds
//   return row >= 0 && row < rows
//     && col >= 0 && col < columns
// }

// export function isWithinDrawing(position: CellPosition, drawing: GlyphArray) {
//   return isWithinBounds(position, getDrawingSize(drawing))
// }

// export function rangeUnionValue(value: number, range: NumberRange): NumberRange {
//   return [Math.min(value, range[0]), Math.max(value, range[0])]
// }

// export function regionUnionPosition(position: CellPosition, region: DrawingRegion): DrawingRegion {
//   return {
//     rowRange: rangeUnionValue(position.row, region.rowRange),
//     columnRange: rangeUnionValue(position.row, region.columnRange),
//   }
// }

// export function cloneRegion(region: DrawingRegion): DrawingRegion {
//   return {
//     rowRange: [...region.rowRange],
//     columnRange: [...region.columnRange],
//   }
// }

// // export function expandToInclude(position: CellPosition, drawing: Drawing) {
// //   const { row, col } = position
// //   const size = getDrawingSize(drawing)
// //   let newDrawing = [...drawing.map(row => [...row])]

// //   if (row < 0) {
// //     newDrawing = addRow('before', newDrawing)
// //   }
// //   if (row >= size.rows) {
// //     newDrawing = addRow('after', newDrawing)
// //   }

// //   if (col < 0) {
// //     newDrawing = addColumn('before', newDrawing)
// //   }
// //   if (col >= size.columns) {
// //     newDrawing = addColumn('after', newDrawing)
// //   }

// //   return newDrawing
// // }

// export function addRow(side: 'before' | 'after', drawing: GlyphArray) {
//   const size = getDrawingSize(drawing)
//   if (side === 'before') {
//     return [emptyRow(size.width), ...drawing]
//   }
//   return [...drawing, emptyRow(size.width)]
// }

// export function addColumn(side: 'before' | 'after', drawing: GlyphArray) {
//   if (side === 'before') {
//     return drawing.map(row => [null, ...row])
//   }
//   return drawing.map(row => [...row, null])
// }

// export function addTrack(edge: DrawingEdge, drawing: GlyphArray) {
//   const columns = drawing[0].length
//   switch (edge) {
//     case 'top':
//       return [emptyRow(columns), ...drawing]
//     case 'bottom':
//       return [...drawing, emptyRow(columns)]
//     case 'left':
//       return drawing.map(row => [null, ...row])
//     case 'right':
//       return drawing.map(row => [...row, null])
//   }
// }

// function emptyRow(size: number) {
//   return new Array(size).fill(emptyGlyph)
// }


// function entireDrawing(drawing: GlyphArray): DrawingRegion {
//   const size = getDrawingSize(drawing)
//   return {
//     rowRange: [0, size.height - 1],
//     columnRange: [0, size.width - 1]
//   }
// }

// /**
//  * Does `a` fully contain `b`?
//  */
// function containsRegion(a: DrawingRegion, b: DrawingRegion) {
//   return containsRange(a.rowRange, b.rowRange)
//     && containsRange(a.columnRange, b.columnRange)
// }

// /**
//  * Does `a` fully contain `b`?
//  */
// function containsRange(a: NumberRange, b: NumberRange) {
//   return a[0] <= b[0] && a[1] >= b[1]
// }

// function rangeSubtract(a: NumberRange, b: NumberRange): NumberRange {
//   return [a[0] - b[0], a[1] - b[1]]
// }


// export function extractRegion(drawing: GlyphArray, region: DrawingRegion): GlyphArray {
//   const fullRegion = entireDrawing(drawing)

//   if (containsRegion(region, fullRegion)) {
//     return drawing
//   }

//   return drawing.slice(region.rowRange[0], region.rowRange[1] + 1)
//     .map(row => row.slice(region.columnRange[0], region.columnRange[1] + 1))
// }

// export function isInnerPosition(
//   { row, col }: CellPosition,
//   { height: rows, width: columns }: DrawingSize
// ) {
//   return row > 0
//     && row < rows - 1
//     && col > 0
//     && col < columns - 1
// }

// export function getPositionEdges(
//   { row, col }: CellPosition,
//   { height: rows, width: columns }: DrawingSize
// ) {
//   const edges = new Set<DrawingEdge>()
//   if (row === 0) {
//     edges.add('top')
//   }
//   if (row === rows - 1) {
//     edges.add('bottom')
//   }
//   if (col === 0) {
//     edges.add('left')
//   }
//   if (col === columns - 1) {
//     edges.add('right')
//   }
//   return edges
// }

// // function paddingNeeded(drawing: Drawing): DrawingEdgeValues {
// //   const size = getDrawingSize(drawing)
// //   const region = getContentRegion(drawing)
// //   const toNumber = (it: boolean) => it ? 1 : 0
// //   const range = {
// //     top: toNumber(region.rowRange[0] === 0),
// //     bottom: toNumber(region.rowRange[1] === size.height - 1),
// //     left: toNumber(region.columnRange[0] === 0),
// //     right: toNumber(region.columnRange[1] === size.width - 1)
// //   }
// //   return range
// // }

// // export function cloneDrawing(drawing: GlyphArray) {
// //   return drawing.map(row => [...row])
// // }

// // export function drawingToString(drawing: GlyphArray) {
// //   return drawing.map(row => row.map(it => it || blankChar)
// //     .join('')).join('\n')
// // }

// // export function drawingIsEmpty(drawing: GlyphArray) {
// //   return drawing.every(row =>
// //     row.every(cell => !cell)
// //   )
// // }

// // export function drawingFromString(raw: string): GlyphArray {
// //   return raw.split('\n')
// //     .map(rowChars =>
// //       splitter.splitGraphemes(rowChars.trim())
// //         .map(glyph => glyph === blankChar ? null : glyph)
// //     )
// // }

// export function positionsAreEqual(
//   a: CellPosition | null | undefined,
//   b: CellPosition | null | undefined
// ) {
//   if (a == null || b == null) {
//     return false
//   }
//   return a.col === b.col && a.row === b.row
// }



// export function getCells(drawing: GlyphArray): Cell[] {
//   return drawing.flatMap((row, rowIdx) =>
//     row.map((glyph, colIdx) => ({
//       position: { row: rowIdx, col: colIdx },
//       glyph
//     }))
//   )
// }

// export function getContentRegion(drawing: GlyphArray): DrawingRegion {
//   const size = getDrawingSize(drawing)
//   const lastRow = size.height - 1
//   const lastColumn = size.width - 1
//   let rowRange: IndexRange = [lastRow, 0]
//   let columnRange: IndexRange = [lastColumn, 0]
//   getCells(drawing)
//     .forEach(({ position, glyph }) => {
//       if (glyphHasValue(glyph)) {
//         rowRange = [
//           Math.min(position.row, rowRange[0]),
//           Math.max(position.row, rowRange[1])
//         ]
//         columnRange = [
//           Math.min(position.col, columnRange[0]),
//           Math.max(position.col, columnRange[1])
//         ]
//       }
//     })

//   if (!isValidRange(rowRange) || !isValidRange(columnRange)) {
//     return emptyRegion
//   }

//   return { rowRange, columnRange }
// }

// export function drawingWriter(
//   drawing: GlyphArray,
//   offset: CellPosition = { row: 0, col: 0 }
// ) {
//   return ({ position, glyph }: Cell) => {
//     const { row, col } = position
//     drawing[row + offset.row][col + offset.col] = glyph
//   }
// }
