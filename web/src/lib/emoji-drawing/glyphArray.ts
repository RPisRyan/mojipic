import { Glyph } from './glyph'
import { Point } from '../2d'
import { tuple } from '../sequences'
import type { Cell } from './drawing'

export class GlyphArray extends Array<Array<Glyph>> {

  static new(value: Glyph[][]) {
    return new GlyphArray(...value)
  }

  static fromString(serialized: string): GlyphArray {
    return GlyphArray.new(
      serialized.split('\n')
        .map(rowChars =>
          Glyph.splitter.splitGraphemes(rowChars.trim())
            .map(glyph =>
              Glyph.isEmpty(glyph)
                ? Glyph.none
                : glyph
            )
        )
    )
  }

  clone() {
    return this.map(row => [...row])
  }

  toString(useWhiteSquares: boolean = false) {
    const emptyChar = useWhiteSquares ? Glyph.whiteSquare : Glyph.space
    return this.map(row => row.map(it => it || emptyChar)
      .join('')).join('\n')
  }

  flatten(): Cell[] {
    return this.flatMap((row, rowIndex) =>
      row.map((glyph, colIndex) =>
        tuple(new Point(colIndex, rowIndex), glyph)
      )
    )
  }

  isEmpty() {
    return this.every(row => row.every(Glyph.isEmpty)
    )
  }

  uniqueGlyphs() {
    const allChars = this.flatMap(
      row => row.flatMap(glyph => glyph))
    return Array.from(new Set(allChars)).filter(it => it)
  }
}
