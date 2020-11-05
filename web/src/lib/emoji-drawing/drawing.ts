import type { GridPosition } from '../2d/gridPosition'
import { Glyph } from './glyph'
import { Grid } from '../2d/grid'
import type { Size } from '../2d'

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

  paddedBounds(minSize: Size, maxSize: Size) {
    let bounds = this.bounds

    const fillWidth = minSize.width - this.bounds.width
    if (fillWidth > 0) {
      bounds = bounds.adjustRight(fillWidth)
    }

    const fillHeight = minSize.height - this.bounds.height
    if (fillHeight > 0) {
      bounds = bounds.adjustTop(-fillHeight)
    }

    // expand right before left
    if (bounds.width < maxSize.width) {
      bounds = bounds.adjustRight(1)
    }
    if (bounds.width < maxSize.width) {
      bounds = bounds.adjustLeft(-1)
    }

    // expand top before bottom
    if (bounds.height < maxSize.height) {
      bounds = bounds.adjustTop(-1)
    }
    if (bounds.height < maxSize.height) {
      bounds = bounds.adjustBottom(1)
    }

    return bounds
  }

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
