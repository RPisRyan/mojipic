import type { GridPosition } from '../2d/gridPosition'
import { Glyph } from './glyph'
import { Grid } from '../2d/grid'

export type Tile = [GridPosition, Glyph]

export class Drawing extends Grid<Glyph> {
  static fromString(serialized: string): Drawing {
    const rows = serialized.split('\n')
      .map(rowChars =>
        Glyph.splitter.splitGraphemes(rowChars.trim())
          .map(glyph =>
            Glyph.isEmpty(glyph)
              ? Glyph.none
              : glyph
          )
      )
    return new Drawing(this.createElements(rows))
  }

  // constructor(elements: ReadonlyArray<Tile>) {
  //   super(elements)
  // }

  toString(useWhiteSquares: boolean = false) {
    const array = this.toArray()
    const emptyChar = useWhiteSquares ? Glyph.whiteSquare : Glyph.space
    return array.map(row => row.map(it => it || emptyChar)
      .join('')).join('\n')
  }

  uniqueGlyphs() {
    const allChars = this.elements.map(it => it[0])
    return Array.from(new Set(allChars)).filter(it => it)
  }
}
