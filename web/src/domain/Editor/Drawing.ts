import GraphemeSplitter from 'grapheme-splitter'

// export type CellState =
//   { mode: 'view', glyph: Glyph }
//   | { mode: 'input', glyph: Glyph }

export type Drawing = Glyph[][]

export type CellPosition = [number, number]

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

export function fromString(raw: string): Drawing {
  return raw.split('\n')
    .map(rowChars => splitter.splitGraphemes(rowChars.trim()))
}
