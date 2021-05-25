import hash from 'hash-it'
import type { ValueObject } from 'immutable'
import { UTIL_INSPECT_CUSTOM } from '../core'
import { replaceAll } from '../strings'

export class Point implements ValueObject {
  constructor(readonly x: number, readonly y: number) {}

  static fromString(serialized: string) {
    if (!serialized) {
      return Point.null
    }
    const trimmed = replaceAll(serialized, /(\[|\])/, '')
    const split = trimmed.split(',')
    if (split.length !== 2) {
      return Point.null
    }
    return new Point(Number(split[0]), Number(split[1]))
  }

  offsetX(x: number) {
    return new Point(this.x + x, this.y)
  }

  offsetY(y: number) {
    return new Point(this.x, this.y + y)
  }

  plus(offset: Point) {
    return new Point(this.x + offset.x, this.y + offset.y)
  }

  minus(offset: Point) {
    return new Point(this.x - offset.x, this.y - offset.y)
  }

  equals(other: any) {
    return other === this || (other.x === this.x && other.y === this.y)
  }

  hashCode() {
    return hash([this.x, this.y])
  }

  toString() {
    return `${this.x},${this.y}`
  }

  [UTIL_INSPECT_CUSTOM]() {
    return this.toString()
  }

  static zero = new Point(0, 0)
  static null = new Point(NaN, NaN)
}
