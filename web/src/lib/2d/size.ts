import { hash } from 'immutable'

export class Size {
  constructor(readonly width: number, readonly height: number) { }

  equals(other: any) {
    return other.width === this.width && other.height === this.height
  }

  hashCode() {
    return hash([this.width, this.height])
  }

  static null = new Size(NaN, NaN)
  static zero = new Size(0, 0)
}
