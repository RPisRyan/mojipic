import type { ValueObject } from 'immutable'
import hash from 'hash-it'

export class Point implements ValueObject {
  constructor(readonly x: number, readonly y: number) { }

  static fromString(serialized: string) {
    if (!serialized) {
      return Point.null
    }
    const trimmed = serialized.replaceAll(/(\[|\])/, '')
    const split = trimmed.split(',')
    if (split.length !== 2) {
      return Point.null
    }
    return new Point(Number(split[0]), Number(split[1]))
  }

  equals(other: any) {
    return other.x === this.x && other.y === this.y
  }

  hashCode() {
    return hash([this.x, this.y])
  }

  toString() {
    return `${this.x},${this.y}`
  }

  static zero = new Point(0, 0)
  static null = new Point(NaN, NaN)
}
