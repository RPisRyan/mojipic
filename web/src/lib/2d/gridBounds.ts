import { GridPosition } from './gridPosition'

export class GridBounds {
  static readonly Null = Object.freeze(
    new GridBounds(GridPosition.Null, GridPosition.Null)
  )

  constructor(
    public readonly min: GridPosition,
    public readonly max: GridPosition
  ) {
    if (max.column < min.column || max.row < min.row) {
      return GridBounds.Null
    }
  }

  get isNull() {
    return this.min.isNull || this.max.isNull
  }

  get height() {
    return this.isNull
      ? 0
      : this.max.row - this.min.row + 1
  }

  get width() {
    return this.isNull
      ? 0
      : this.max.column - this.min.column + 1
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

  adjustLeft(offset: number) {
    return new GridBounds(
      this.min.moveColumn(offset),
      this.max
    )
  }

  adjustRight(offset: number) {
    return new GridBounds(
      this.min,
      this.max.moveColumn(offset)
    )
  }

  adjustTop(offset: number) {
    return new GridBounds(
      this.min.moveRow(offset),
      this.max
    )
  }

  adjustBottom(offset: number) {
    return new GridBounds(
      this.min,
      this.max.moveRow(offset)
    )
  }

  expand(units: number) {
    const offset = new GridPosition(units, units)
    return new GridBounds(
      this.min.minus(offset),
      this.max.plus(offset)
    )
  }

  include(position: GridPosition) {
    return new GridBounds(
      this.min.min(position),
      this.max.max(position)
    )
  }

  * positions() {
    for (let row = this.min.row; row <= this.max.row; row++) {
      for (let column = this.min.column; column <= this.max.column; column++) {
        yield new GridPosition(column, row)
      }
    }
  }

  toString() {
    return `${this.min.toString()} ... ${this.max.toString()}`
  }
}
