import hash from 'hash-it'
import type { ValueObject } from 'immutable'
import { UTIL_INSPECT_CUSTOM } from '../core'
import { replaceAll } from '../strings'
import type { GridBounds } from './gridBounds'

export class GridPosition implements ValueObject {

  constructor(
    public readonly column: number,
    public readonly row: number
  ) {
  }

  static fromString(serialized: string) {
    if (!serialized) {
      return GridPosition.Null
    }
    const trimmed = replaceAll(serialized, /(\[|\])/, '')
    const split = trimmed.split(',')
    if (split.length !== 2) {
      return GridPosition.Null
    }
    return new GridPosition(Number(split[0]), Number(split[1]))
  }

  get isNull() {
    return isNaN(this.column) || isNaN(this.row)
  }

  min(other: GridPosition) {
    if (other.isNull) return this
    if (this.isNull) return other
    return new GridPosition(
      Math.min(this.column, other.column),
      Math.min(this.row, other.row)
    )
  }

  max(other: GridPosition) {
    if (other.isNull) return this
    if (this.isNull) return other
    return new GridPosition(
      Math.max(this.column, other.column),
      Math.max(this.row, other.row)
    )
  }

  moveColumn(distance: number) {
    return new GridPosition(this.column + distance, this.row)
  }

  moveRow(distance: number) {
    return new GridPosition(this.column, this.row + distance)
  }

  plus(offset: GridPosition) {
    return new GridPosition(this.column + offset.column, this.row + offset.row)
  }

  minus(offset: GridPosition) {
    return new GridPosition(this.column - offset.column, this.row - offset.row)
  }

  equals(other: GridPosition) {
    return other === this ||
      (other.column === this.column && other.row === this.row)
  }

  hashCode() {
    return hash([this.column, this.row])
  }

  toString() {
    return `${this.column},${this.row}`
  }

  [UTIL_INSPECT_CUSTOM]() {
    return this.toString()
  }

  static Zero = Object.freeze(new GridPosition(0, 0))
  static Null = Object.freeze(new GridPosition(NaN, NaN))
}
