import { UTIL_INSPECT_CUSTOM } from '../core'
import { atLeast } from '../numbers'
import { GridPosition } from './gridPosition'
import { Size } from './size'

export class GridBounds {
  static readonly Null = Object.freeze(new GridBounds(GridPosition.Null, GridPosition.Null))

  static fromSize(size: Size) {
    return new GridBounds(GridPosition.Zero, new GridPosition(size.width - 1, size.height - 1))
  }

  constructor(public readonly min: GridPosition, public readonly max: GridPosition) {
    if (max.column < min.column || max.row < min.row) {
      return GridBounds.Null
    }
  }

  get isNull() {
    return this.min.isNull || this.max.isNull
  }

  get height() {
    return this.isNull ? 0 : this.max.row - this.min.row + 1
  }

  get width() {
    return this.isNull ? 0 : this.max.column - this.min.column + 1
  }

  get left() {
    return this.min.column
  }

  get top() {
    return this.min.row
  }

  get right() {
    return this.max.column
  }

  get bottom() {
    return this.max.row
  }

  get size() {
    return new Size(this.width, this.height)
  }

  contains({ column, row }: GridPosition) {
    return column >= this.left && column <= this.right && row >= this.top && row <= this.bottom
  }

  adjustLeft(offset: number) {
    return new GridBounds(this.min.moveColumn(offset), this.max)
  }

  adjustRight(offset: number) {
    return new GridBounds(this.min, this.max.moveColumn(offset))
  }

  adjustTop(offset: number) {
    return new GridBounds(this.min.moveRow(offset), this.max)
  }

  adjustBottom(offset: number) {
    return new GridBounds(this.min, this.max.moveRow(offset))
  }

  expand(units: number) {
    const offset = new GridPosition(units, units)
    return new GridBounds(this.min.minus(offset), this.max.plus(offset))
  }

  including(position: GridPosition) {
    return new GridBounds(this.min.min(position), this.max.max(position))
  }

  sizedAtLeast(size: Size) {
    return this.adjustTop(-1 * atLeast(0, size.height - this.height)).adjustRight(
      atLeast(0, size.width - this.width),
    )
  }

  *positions() {
    for (let row = this.min.row; row <= this.max.row; row++) {
      for (let column = this.min.column; column <= this.max.column; column++) {
        yield new GridPosition(column, row)
      }
    }
  }

  equals(other: GridBounds) {
    if (this === other) {
      return true
    }
    return this.min.equals(other.min) && this.max.equals(other.max)
  }

  toString() {
    return `${this.min.toString()} ... ${this.max.toString()}`
  }

  [UTIL_INSPECT_CUSTOM]() {
    return this.toString()
  }
}
