import { Map } from 'immutable'
import { GridPosition } from '../2d/gridPosition'
import { Glyph, GlyphMatrix } from './glyph'
import { Grid } from '../2d/grid'
import type { Size } from '../2d'
import { filledArray2D, tuple } from '../sequences'
import { replaceAll } from '../strings'
import { GridBounds } from '../2d/gridBounds'
import { toFullWidth } from '../chars'
import type { DrawingSettings } from './types'

export type Tile = [GridPosition, Glyph]

export class Drawing extends Grid<Glyph> {

  constructor(elements: ReadonlyArray<Tile>) {
    super(elements)
  }

  static fromString(serialized: string): Drawing {
    const rows = serialized.split('\n')
      .map(rowChars => {
        const rowGlyphs = replaceAll(rowChars, Glyph.space!, ' ')
        return Glyph.splitter.splitGraphemes(rowGlyphs)
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
        (glyph: Glyph, column) => tuple(new GridPosition(column, row), glyph)
      )
    ))
  }

  static createEmpty(bounds: GridBounds) {
    if (bounds.isNull) {
      return new Drawing([])
    }
    const positions = [...bounds.positions()]
    return new Drawing(
      positions.map(position => [position, Glyph.none])
    )
  }

  get contentBounds() {
    return this.elements.filter(([, glyph]) => !Glyph.isEmpty(glyph))
      .reduce((extent, [position]) => extent.including(position), GridBounds.Null)
  }

  get isEmpty() {
    return !this.elements
      || this.elements.length === 0
      || !this.elements.some(([, glyph]) => !Glyph.isEmpty(glyph))
  }

  rowIsEmpty(row: number) {
    return !this.elements.some(
      ([position, glyph]) => position.row === row && Glyph.isEmpty(glyph))
  }

  columnIsEmpty(column: number) {
    return !this.elements.some(
      ([position, glyph]) => position.column === column && Glyph.isEmpty(glyph))
  }

  croppedToContent(minSize: Size) {
    let bounds = this.bounds
    const contentBounds = this.contentBounds

    function removeRow() {
      if (bounds.top < contentBounds.top) {
        bounds = bounds.adjustTop(1)
        return true
      }
      if (bounds.bottom > contentBounds.bottom) {
        bounds = bounds.adjustBottom(-1)
        return true
      }
      return false
    }

    let trimHeight = bounds.height - Math.max(minSize.height, contentBounds.height)
    while (trimHeight-- > 0) {
      if (!removeRow()) break
    }

    function removeColumn() {
      if (bounds.right > contentBounds.right) {
        bounds = bounds.adjustRight(-1)
        return true
      }
      if (bounds.left < contentBounds.left) {
        bounds = bounds.adjustLeft(1)
        return true
      }
      return false
    }

    let trimWidth = bounds.width - Math.max(minSize.width, contentBounds.width)
    while (trimWidth-- > 0) {
      if (!removeColumn()) break
    }

    return this.croppedTo(bounds)
  }

  croppedTo(bounds: GridBounds) {
    return this.withElements(this.elements.filter(
      ([position]) => bounds.contains(position)
    ))
  }

  paddedTo(minSize: Size) {
    const bounds = this.bounds.sizedAtLeast(minSize)
    if (bounds.equals(this.bounds)) {
      return this
    }
    return this.expandedTo(bounds)
  }

  expandedTo(bounds: GridBounds) {
    return Drawing.createEmpty(bounds).overlaidBy(this)
  }

  overlaidBy(drawing: Drawing) {
    const map = this.toMap().merge(drawing.elements)
    return new Drawing([...map])
  }

  toMap() {
    return Map(this.elements)
  }

  paddedBounds({ minSize, maxSize }: DrawingSettings) {
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
      rowEntries[column - origin.column] = value
    }
    return matrix
  }

  toString(useWhiteSquares: boolean = false) {
    const array = this.toArray()
    const emptyChar = useWhiteSquares ? Glyph.whiteSquare : Glyph.space
    return array.map(row => row.map(it =>
      Glyph.isEmpty(it) ? emptyChar : toFullWidth(it))
      .join('')).join('\n')
  }

  uniqueGlyphs() {
    const allChars = this.elements.map(it => it[0])
    return Array.from(new Set(allChars)).filter(it => it)
  }

}
