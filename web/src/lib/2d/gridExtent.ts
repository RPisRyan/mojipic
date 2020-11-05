import { atLeast } from '../numbers'
import { GridPosition } from './gridPosition'

export class GridExtent {
  static readonly Null = Object.freeze(
    new GridExtent(GridPosition.Null, GridPosition.Null)
  )

  constructor(
    public readonly min: GridPosition,
    public readonly max: GridPosition
  ) {
  }

  get height() {
    return atLeast(0, this.max.row - this.min.row + 1)
  }

  get width() {
    return atLeast(0, this.max.column - this.min.column + 1)
  }

  expand(units: number) {
    const offset = new GridPosition(units, units)
    return new GridExtent(
      this.min.minus(offset),
      this.max.plus(offset)
    )
  }

  include(position: GridPosition) {
    return new GridExtent(
      this.min.min(position),
      this.max.max(position)
    )
  }

  * enumerate() {
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
