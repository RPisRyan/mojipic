import type { ValueObject } from 'immutable'
import hash from 'hash-it'

export class Point implements ValueObject {
  constructor(readonly x: number, readonly y: number) { }

  equals(other: any) {
    return other.x === this.x && other.y === this.y
  }

  hashCode() {
    return hash([this.x, this.y])
  }

  static zero = new Point(0, 0)
  static null = new Point(NaN, NaN)
}
