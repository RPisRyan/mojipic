import GraphemeSplitter from 'grapheme-splitter'
import { blankChar } from '../util/charUtil'

export type Drawing = Glyph[][]

export type CellPosition = { row: number, col: number }

export type DrawingBounds = {
  rows: number,
  columns: number
}

export type Glyph = string | null

export const emptyGlyph = null

const splitter = new GraphemeSplitter()

export function emptyDrawing({ rows, columns }: DrawingBounds = { rows: 3, columns: 3 }) {
  return Array.from(new Array(rows), () =>
    Array.from(new Array(columns),
      () => null)
  )
}

export function getDrawingBounds(drawing: Drawing): DrawingBounds {
  return {
    rows: drawing.length,
    columns: drawing[0]?.length
  }
}

export function boundsEqual(a: DrawingBounds, b: DrawingBounds) {
  return a.rows === b.rows && a.columns === b.columns
}

export function isWithinBounds(position: CellPosition, bounds: DrawingBounds) {
  const { row, col } = position
  const { rows, columns } = bounds
  return row >= 0 && row < rows
    && col >= 0 && col < columns
}

export function isWithinDrawing(position: CellPosition, drawing: Drawing) {
  return isWithinBounds(position, getDrawingBounds(drawing))
}

export function expandToInclude(position: CellPosition, drawing: Drawing) {
  const { row, col } = position
  const size = getDrawingBounds(drawing)
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
  const size = getDrawingBounds(drawing)
  if (side === 'before') {
    return [emptyRow(size.columns), ...drawing]
  }
  return [...drawing, emptyRow(size.columns)]
}

export function addColumn(side: 'before' | 'after', drawing: Drawing) {
  const size = getDrawingBounds(drawing)
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

// this could be more efficient
export function trimDrawing(drawing: Drawing, minSize: number) {
  let working = [...drawing.map(it => [...it])]
  let iterations = 1e3
  const canIterate = () => iterations-- > 0

  const canTrimRows = () => working.length > minSize
  while (canIterate() && canTrimRows() && rowIsEmpty(0, working)) {
    working = working.slice(1)
  }
  while (canIterate() && canTrimRows() && rowIsEmpty(working.length - 1, working)) {
    working = working.slice(0, working.length - 1)
  }

  const canTrimColumns = () => {
    return working[0].length > minSize
  }
  while (canIterate() && canTrimColumns() && colIsEmpty(0, working)) {
    working = working.map(row => row.slice(1))
  }
  while (canIterate() && canTrimColumns() && colIsEmpty(working[0].length - 1, working)) {
    working = working.map(row => row.slice(0, row.length - 1))
  }

  return working
}

export function isInnerPosition(
  { row, col }: CellPosition,
  { rows, columns }: DrawingBounds
) {
  return row > 0
    && row < rows - 1
    && col > 0
    && col < columns - 1
}

export function getPositionEdges(
  { row, col }: CellPosition,
  { rows, columns }: DrawingBounds
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
  edges: Set<DrawingEdge>,
  drawing: Drawing,
  maxBounds: DrawingBounds
) {
  const currentBounds = getDrawingBounds(drawing)
  let result = drawing

  // If edge type was instead [direction, ordinal],
  //   this would be more elegant
  if (currentBounds.rows < maxBounds.rows) {
    if (edges.has('top')) {
      result = addTrack('top', result)
    }
    if (edges.has('bottom')) {
      result = addTrack('bottom', result)
    }
  }

  if (currentBounds.columns < maxBounds.columns) {
    if (edges.has('left')) {
      result = addTrack('left', result)
    }
    if (edges.has('right')) {
      result = addTrack('right', result)
    }
  }

  return result
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

export type Cell = { position: CellPosition, glyph: Glyph }

type DrawingEdge = 'top' | 'bottom' | 'left' | 'right'
