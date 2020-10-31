import GraphemeSplitter from 'grapheme-splitter'

const splitter = new GraphemeSplitter()

export type Glyph = string | null

export const emptyGlyph: Glyph = null

export type GlyphArray = Glyph[][]

// Not sure
// export const blankChar = '  ' // U+2008 U+2003

// This works, but it forces Android Chrome to use small glyphs
export const emptySpaceGlyph = '  ' // U+2009 U+2003

export const whiteSquareGlyph: Glyph = '◻️'

export function glyph(value: string) {
  return value as Glyph
}

export function glyphIsEmpty(glyph: Glyph) {
  return glyph == null
}

export function glyphHasValue(glyph: Glyph) {
  return glyph != null
}

export function cloneGlyphArray(array: GlyphArray) {
  return array.map(row => [...row])
}

export function glyphArrayToString(array: GlyphArray, useWhiteSquares: boolean = false) {
  const emptyChar = useWhiteSquares ? whiteSquareGlyph : emptySpaceGlyph
  return array.map(row => row.map(it => it || emptyChar)
    .join('')).join('\n')
}

export function drawingIsEmpty(array: GlyphArray) {
  return array.every(row => row.every(glyphIsEmpty)
  )
}

export function glyphArrayFromString(raw: string): GlyphArray {
  return raw.split('\n')
    .map(rowChars =>
      splitter.splitGraphemes(rowChars.trim())
        .map(glyph =>
          (glyph === whiteSquareGlyph || glyph === emptySpaceGlyph || glyphIsEmpty(glyph))
            ? emptyGlyph
            : glyph
        )
    )
}

export function uniqueGlyphs(array: GlyphArray) {
  const allChars = array.flatMap(
    row => row.flatMap(glyph => glyph))
  return Array.from(new Set(allChars)).filter(it => it)
}
