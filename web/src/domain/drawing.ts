import { padding } from 'csstips'
import GraphemeSplitter from 'grapheme-splitter'
import { maxDrawingBounds } from '../app/model/canvasState'
import { tuple } from '../util/arrayUtil'
import { blankChar } from '../util/charUtil'

export type Drawing = Glyph[][]

export type CellPosition = { row: number, col: number }

export type DrawingSize = {
  rows: number,
  columns: number
}

export type Glyph = string | null

export const emptyGlyph = null

const splitter = new GraphemeSplitter()

export function glyphIsEmpty(glyph: Glyph) {
  return glyph == null
}

export function glyphHasValue(glyph: Glyph) {
  return glyph != null
}

export function emptyDrawing({ rows, columns }: DrawingSize = { rows: 3, columns: 3 }) {
  return Array.from(new Array(rows), () =>
    Array.from(new Array(columns),
      () => null)
  )
}

export function getDrawingSize(drawing: Drawing): DrawingSize {
  return {
    rows: drawing.length,
    columns: Math.max(...drawing.map(it => it.length))
  }
}

export function boundsEqual(a: DrawingSize, b: DrawingSize) {
  return a.rows === b.rows && a.columns === b.columns
}

export function isWithinBounds(position: CellPosition, bounds: DrawingSize) {
  const { row, col } = position
  const { rows, columns } = bounds
  return row >= 0 && row < rows
    && col >= 0 && col < columns
}

export function isWithinDrawing(position: CellPosition, drawing: Drawing) {
  return isWithinBounds(position, getDrawingSize(drawing))
}

export function expandToInclude(position: CellPosition, drawing: Drawing) {
  const { row, col } = position
  const size = getDrawingSize(drawing)
  let newDrawing = [...drawing.map(row => [...row])]

  if (row < 0) {
    newDrawing = addRow('before', newDrawing)
  }
  if (row >= size.rows) {
    newDrawing = addRow('after', newDrawing)
  }

  if (col < 0) {
    newDrawing = addColumn('before', newDrawing)
  }
  if (col >= size.columns) {
    newDrawing = addColumn('after', newDrawing)
  }

  return newDrawing
}

export function addRow(side: 'before' | 'after', drawing: Drawing) {
  const size = getDrawingSize(drawing)
  if (side === 'before') {
    return [emptyRow(size.columns), ...drawing]
  }
  return [...drawing, emptyRow(size.columns)]
}

export function addColumn(side: 'before' | 'after', drawing: Drawing) {
  const size = getDrawingSize(drawing)
  if (side === 'before') {
    return drawing.map(row => [null, ...row])
  }
  return drawing.map(row => [...row, null])
}

export function addTrack(edge: DrawingEdge, drawing: Drawing) {
  const columns = drawing[0].length
  switch (edge) {
    case 'top':
      return [emptyRow(columns), ...drawing]
    case 'bottom':
      return [...drawing, emptyRow(columns)]
    case 'left':
      return drawing.map(row => [null, ...row])
    case 'right':
      return drawing.map(row => [...row, null])
  }
}

function emptyRow(size: number) {
  return new Array(size).fill(emptyGlyph)
}

export function positionToString(position: CellPosition | null) {
  if (position == null) {
    return null
  }
  return position.row + ',' + position.col
}

export function positionFromString(value: string): CellPosition {
  const numbers = value.split(',').map(Number)
  if (numbers.length !== 2) {
    console.error('Failed to parse position ' + value)
    return { row: 0, col: 0 }
  }
  return { row: numbers[0], col: numbers[1] }
}

function entireDrawing(drawing: Drawing): DrawingRegion {
  const size = getDrawingSize(drawing)
  return {
    rowRange: [0, size.rows - 1],
    columnRange: [0, size.columns - 1]
  }
}

/**
 * Does `a` fully contain `b`?
 */
function containsRegion(a: DrawingRegion, b: DrawingRegion) {
  return containsRange(a.rowRange, b.rowRange)
    && containsRange(a.columnRange, b.columnRange)
}

/**
 * Does `a` fully contain `b`?
 */
function containsRange(a: NumberRange, b: NumberRange) {
  return a[0] <= b[0] && a[1] >= b[1]
}

function rangeSubtract(a: NumberRange, b: NumberRange): NumberRange {
  return [a[0] - b[0], a[1] - b[1]]
}

function regionSubtract(a: DrawingRegion, b: DrawingRegion): DrawingRegion {
  return {
    rowRange: rangeSubtract(a.rowRange, b.rowRange),
    columnRange: rangeSubtract(a.columnRange, b.columnRange)
  }
}

function extractRegion(drawing: Drawing, region: DrawingRegion): Drawing {
  const fullRegion = entireDrawing(drawing)

  if (containsRegion(region, fullRegion)) {
    return drawing
  }

  return drawing.slice(region.rowRange[0], region.rowRange[1])
    .map(row => row.slice(region.columnRange[0], region.columnRange[1]))
}

export function trimDrawing(drawing: Drawing) {
  const contentRegion = getContentRegion(drawing)
  return extractRegion(drawing, contentRegion)
}

export function isInnerPosition(
  { row, col }: CellPosition,
  { rows, columns }: DrawingSize
) {
  return row > 0
    && row < rows - 1
    && col > 0
    && col < columns - 1
}

export function getPositionEdges(
  { row, col }: CellPosition,
  { rows, columns }: DrawingSize
) {
  const edges = new Set<DrawingEdge>()
  if (row === 0) {
    edges.add('top')
  }
  if (row === rows - 1) {
    edges.add('bottom')
  }
  if (col === 0) {
    edges.add('left')
  }
  if (col === columns - 1) {
    edges.add('right')
  }
  return edges
}

export function padDrawing(
  drawing: Drawing,
  maxBounds: DrawingSize
): Drawing {
  const size = getDrawingSize(drawing)

  if (
    size.rows >= maxBounds.rows
    && size.columns >= maxBounds.columns
  ) return drawing

  const paddings = paddingNeeded(drawing)

  const intendedSize = () => ({
    rows: size.rows + paddings.top + paddings.bottom,
    columns: size.columns + paddings.left + paddings.right
  }) as DrawingSize
  if (intendedSize().rows > maxBounds.rows) {
    paddings.bottom = 0
  }
  if (intendedSize().rows > maxBounds.rows) {
    paddings.top = 0
  }
  if (intendedSize().columns > maxBounds.columns) {
    paddings.right = 0
  }
  if (intendedSize().columns > maxBounds.columns) {
    paddings.left = 0
  }

  let current = drawing
  if (paddings.top) {
    current = addTrack('top', current)
  }
  if (paddings.bottom) {
    current = addTrack('bottom', current)
  }
  if (paddings.left) {
    current = addTrack('left', current)
  }
  if (paddings.right) {
    current = addTrack('right', current)
  }

  return current
}

function paddingNeeded(drawing: Drawing): DrawingEdgeValues {
  const size = getDrawingSize(drawing)
  const region = getContentRegion(drawing)
  const toNumber = (it: boolean) => it ? 1 : 0
  const range = {
    top: toNumber(region.rowRange[0] === 0),
    bottom: toNumber(region.rowRange[1] === size.rows - 1),
    left: toNumber(region.columnRange[0] === 0),
    right: toNumber(region.columnRange[1] === size.columns - 1)
  }
  return range
}

export function cloneDrawing(drawing: Drawing) {
  return drawing.map(row => [...row])
}

export function drawingToString(drawing: Drawing) {
  return drawing.map(row => row.map(it => it || blankChar)
    .join('')).join('\n')
}

export function drawingIsEmpty(drawing: Drawing) {
  return drawing.every(row =>
    row.every(cell => !cell)
  )
}

export function drawingFromString(raw: string): Drawing {
  return raw.split('\n')
    .map(rowChars =>
      splitter.splitGraphemes(rowChars.trim())
        .map(glyph => glyph === blankChar ? null : glyph)
    )
}

function rowIsEmpty(rowIdx: number, drawing: Drawing) {
  return drawing[rowIdx].every(cell => cell == null)
}

function colIsEmpty(colIdx: number, drawing: Drawing) {
  return drawing.every(row => row[colIdx] == null)
}

export function drawingsAreEqual(a: Drawing | null, b: Drawing | null) {
  if (a == null || b == null) {
    return false
  }
  if (a === b) {
    return true
  }
  return drawingToString(a) === drawingToString(b)
}

export function positionsAreEqual(
  a: CellPosition | null | undefined,
  b: CellPosition | null | undefined
) {
  if (a == null || b == null) {
    return false
  }
  return a.col === b.col && a.row === b.row
}

export function uniqueGlyphs(drawing: Drawing) {
  const allChars = drawing.flatMap(
    row => row.flatMap(glyph => glyph))
  return Array.from(new Set(allChars)).filter(it => it)
}

export function getCells(drawing: Drawing): Cell[] {
  return drawing.flatMap((row, rowIdx) =>
    row.map((glyph, colIdx) => ({
      position: { row: rowIdx, col: colIdx },
      glyph
    }))
  )
}

export function getContentRegion(drawing: Drawing): DrawingRegion {
  const size = getDrawingSize(drawing)
  const lastRow = size.rows - 1
  const lastColumn = size.columns - 1
  let rowRange: IndexRange = [lastRow, 0]
  let columnRange: IndexRange = [lastColumn, 0]
  getCells(drawing)
    .forEach(({ position, glyph }) => {
      if (glyphHasValue(glyph)) {
        rowRange = [
          Math.min(position.row, rowRange[0]),
          Math.max(position.row, rowRange[1])
        ]
        columnRange = [
          Math.min(position.col, columnRange[0]),
          Math.max(position.col, columnRange[1])
        ]
      }
    })

  if (!isValidRange(rowRange) || !isValidRange(columnRange)) {
    return emptyRegion
  }

  return { rowRange, columnRange }
}

function isValidRange(range: NumberRange) {
  return range[1] >= range[0]
}

function intersectRegion(a: DrawingRegion, b: DrawingRegion): DrawingRegion {
  return {
    rowRange: intersectRanges(a.rowRange, b.rowRange),
    columnRange: intersectRanges(a.columnRange, b.columnRange)
  }
}

function intersectRanges(a: NumberRange, b: NumberRange): NumberRange {
  const result = tuple(
    Math.max(a[0], b[0]),
    Math.min(a[1], b[1])
  )
  if (result[1] < result[0]) {
    return [result[1], result[0]]
  }
  return result
}

const emptyRange: NumberRange = [0, 0]

const emptyRegion: DrawingRegion = {
  rowRange: emptyRange,
  columnRange: emptyRange
}

export type NumberRange = [number, number]
export type IndexRange = NumberRange

export type DrawingRegion = {
  rowRange: IndexRange,
  columnRange: IndexRange
}

export type Cell = { position: CellPosition, glyph: Glyph }

type DrawingEdge = 'top' | 'bottom' | 'left' | 'right'

type DrawingEdgeValues = {
  top: number,
  bottom: number,
  left: number,
  right: number
}
