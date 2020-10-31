import { Record, Map } from 'immutable'
import { Point, Rect, Size } from '../lib/2d'
import { sequence } from '../lib/sequences'
import { emptyGlyph, Glyph, glyphArrayToString } from './glyph'

export type Cell = [Point, Glyph]

/**
 * Immutable type. Stores cells as a map of Point -> Glyph.
 * Bounds represent the content region.
 */
export class Drawing extends Record({
  contents: Map<Point, Glyph>(),
  bounds: Rect.null
}) {

  static fromContent(cells: Cell[]) {
    return new Drawing({
      contents: Map(cells),
      bounds: contentBounds(cells)
    })
  }

  getCell(point: Point) {
    return this.contents.get(point)
  }

  setCell(cell: Cell) {
    const contents = this.contents.set(...cell)
    const bounds = new Rect(contentBounds(contents))
    return this.set('contents', contents).set('bounds', bounds)
  }

  rowIsEmpty(row: number) {
    return !sequence(this.contents.entries()).any(
      ([position]) => position.y === row
    )
  }

  columnIsEmpty(column: number) {
    return !sequence(this.contents.entries()).any(
      ([position]) => position.x === column
    )
  }

  padBounds(minSize: Size, maxSize: Size) {
    let bounds = this.bounds

    const fillWidth = minSize.width - this.bounds.width
    if (fillWidth > 0) {
      bounds = bounds.adjustSize('right', fillWidth)
    }

    const fillHeight = minSize.height - this.bounds.height
    if (fillHeight > 0) {
      bounds = bounds.adjustSize('bottom', fillHeight)
    }

    // expand right before left
    if (bounds.width < maxSize.width) {
      bounds = bounds.adjustSize('right')
    }
    if (bounds.width < maxSize.width) {
      bounds = bounds.adjustSize('left')
    }

    // expand top before bottom
    if (bounds.height < maxSize.height) {
      bounds = bounds.adjustSize('top')
    }
    if (bounds.height < maxSize.height) {
      bounds = bounds.adjustSize('bottom')
    }

    return this.set('bounds', bounds)
  }

  *cells() {
    const { bounds, contents } = this
    if (isNaN(bounds.width) || isNaN(bounds.height)) {
      return []
    }

    const { top, bottom, left, right } = bounds
    for (let y = top; y <= bottom; y++) {
      for (let x = left; x <= right; x++) {
        const point = new Point(x, y)
        const cell = contents.get(point)
        yield [point, cell || emptyGlyph] as Cell
      }
    }
  }

  toArray() {
    const { x, y, width, height } = this.bounds
    const array: Glyph[][] = Array.from(new Array(height), () =>
      Array.from(new Array(width),
        () => null as Glyph)
    )
    for (const [position, glyph] of this.cells()) {
      array[position.x - x][position.y - y] = glyph
    }
    return array
  }

  toString(): string {
    return glyphArrayToString(this.toArray())
  }
}

function contentBounds(cells: Iterable<[Point, Glyph]>) {
  return sequence(cells).reduce(
    (rect, [position]) => rect.enclosePoint(position),
    Rect.null
  )
}
