import { gl } from 'chroma-js'
import GraphemeSplitter from 'grapheme-splitter'
import { blankChar } from '../../util/charUtil'

export type Drawing = Glyph[][]

export type CellPosition = { row: number, col: number }

export type DrawingSize = {
  rows: number,
  columns: number
}

export type Glyph = string | null

export type PaintbrushTool = { type: 'paint'; brush: Glyph }
export type EraserTool = { type: 'eraser' }

export type Tool = PaintbrushTool | EraserTool

export const emptyGlyph = null

const splitter = new GraphemeSplitter()

export function emptyDrawing({ rows, columns }: DrawingSize) {
  return Array.from(new Array(rows), () =>
    Array.from(new Array(columns),
      () => null)
  )
}

export function getDrawingSize(drawing: Drawing): DrawingSize {
  return {
    rows: drawing.length,
    columns: drawing[0]?.length
  }
}

export function isWithinDrawing(position: CellPosition, drawing: Drawing) {
  const { row, col } = position
  const size = getDrawingSize(drawing)
  return row >= 0 && row < size.rows
    && col >= 0 && col < size.columns
}

export function expandToInclude(position: CellPosition, drawing: Drawing) {
  const { row, col } = position
  const size = getDrawingSize(drawing)
  let newDrawing = drawing

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
