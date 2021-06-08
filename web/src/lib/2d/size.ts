import hash from 'hash-it'
import { UTIL_INSPECT_CUSTOM } from '../core'

export class Size {
  static null = new Size(NaN, NaN)
  static zero = new Size(0, 0)
  public readonly width: number
  public readonly height: number

  constructor(width: number, height: number) {
    this.width = Math.max(0, width)
    this.height = Math.max(0, height)
  }

  plus({ width, height }: Size) {
    return new Size(this.width + width, this.height + height)
  }

  minus({ width, height }: Size) {
    return new Size(this.width - width, this.height - height)
  }

  adjustHeight(height: number) {
    return new Size(this.width, this.height + height)
  }

  adjustWidth(width: number) {
    return new Size(this.width + width, this.height)
  }

  equals(other: any) {
    return other === this || (other.width === this.width && other.height === this.height)
  }

  hashCode() {
    return hash([this.width, this.height])
  }

  [UTIL_INSPECT_CUSTOM]() {
    return this.toString()
  }
}
