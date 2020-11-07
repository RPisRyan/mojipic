import { GridPosition } from '../2d/gridPosition'
import { Glyph, GlyphMatrix } from './glyph'
import { Grid, GridElement } from '../2d/grid'
import type { Size } from '../2d'
import { filledArray2D, tuple } from '../sequences'
import { replaceAll } from '../strings'
import { GridBounds } from '../2d/gridBounds'
import { toFullWidth } from '../chars'

export type Tile = [GridPosition, Glyph]

export class Drawing extends Grid<Glyph> {

  static fromString(serialized: string): Drawing {
    const rows = serialized.split('\n')
      .map(rowChars => {
        const rowGlyphs = replaceAll(rowChars, Glyph.space!, ' ')
        return Glyph.splitter.splitGraphemes(rowGlyphs.trim())
          .map(glyph =>
            Glyph.isEmpty(glyph)
              ? Glyph.none
              : glyph
          )
      })
    return this.fromArray(rows)
  }

  static fromArray(array: Array<Array<Glyph>>): Drawing {
    return new Drawing(array.flatMap((rowEntries: Array<Glyph>, row) =>
      rowEntries.map(
        (glyph: Glyph, column) =>
          Glyph.isEmpty(glyph)
            ? null
            : tuple(new GridPosition(column, row), glyph)
      )
        .filter(it => it) as Array<GridElement<Glyph>>
    ))
  }

  constructor(elements: ReadonlyArray<Tile>) {
    super(elements)
  }

  paddedBounds(minSize: Size, maxSize: Size) {
    let bounds = this.bounds

    if (bounds.isNull) {
      return new GridBounds(
        new GridPosition(0, 0),
        new GridPosition(minSize.width - 1, minSize.height - 1)
      )
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

    const fillWidth = minSize.width - bounds.width
    if (fillWidth > 0) {
      bounds = bounds.adjustRight(fillWidth)
    }

    const fillHeight = minSize.height - bounds.height
    if (fillHeight > 0) {
      bounds = bounds.adjustTop(-fillHeight)
    }

    return bounds
  }

  /**
   * To 2D array of values.
   */
  toArray(): GlyphMatrix {
    const bounds = this.bounds
    const origin = bounds.min
    const matrix: GlyphMatrix = filledArray2D(bounds.width, bounds.height, Glyph.none)
    for (const [{ column, row }, value] of this.elements) {
      let rowEntries: Array<Glyph> = matrix[row - origin.row]
      if (!rowEntries) {
        rowEntries = []
        matrix[row - origin.row] = rowEntries
      }
      rowEntries[column - origin.column] = toFullWidth(value)
    }
    return matrix
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
