import hash from 'hash-it'
import { UTIL_INSPECT_CUSTOM } from '../core'
import { Point } from './point'
import { Size } from './size'

export class Rect implements RectSides {
  constructor(public position: Point, public size: Size) {}

  static fromSides({ left, top, right, bottom }: RectSides) {
    return new Rect(
      new Point(left, top),
      new Size(Math.max(0, right - left), Math.max(0, bottom - top)),
    )
  }

  static zero = new Rect(Point.zero, Size.zero)
  static null = new Rect(Point.null, Size.null)

  get left() {
    return this.position.x
  }
  get top() {
    return this.position.y
  }
  get right() {
    return this.left + this.width
  }
  get bottom() {
    return this.top + this.height
  }

  get height() {
    return this.size.height
  }
  get width() {
    return this.size.width
  }

  atPosition(position: Point) {
    return new Rect(position, this.size)
  }

  withSize(size: Size) {
    return new Rect(this.position, size)
  }

  withTopMoved(yOffset: number) {
    return new Rect(this.position.offsetY(yOffset), this.size.adjustHeight(-yOffset))
  }

  withBottomMoved(yOffset: number) {
    return new Rect(this.position, this.size.adjustHeight(yOffset))
  }

  withLeftMoved(xOffset: number) {
    return new Rect(this.position.offsetX(xOffset), this.size.adjustWidth(-xOffset))
  }

  withRightMoved(xOffset: number) {
    return new Rect(this.position, this.size.adjustWidth(xOffset))
  }

  enclosePoint(point: Point) {
    if (this.size.equals(Size.null) || this.position.equals(Point.null)) {
      return new Rect(point, Size.zero)
    }

    if (point.equals(Point.null)) {
      return this
    }

    return Rect.fromSides({
      left: Math.min(this.left, point.x),
      top: Math.min(this.top, point.y),
      right: Math.max(this.right, point.x),
      bottom: Math.max(this.bottom, point.y),
    })
  }

  union(rect: Rect) {
    if (rect.equals(Rect.null)) {
      return this
    }

    if (this.equals(Rect.null)) {
      return rect
    }

    return Rect.fromSides({
      left: Math.min(this.left, rect.left),
      top: Math.min(this.top, rect.top),
      right: Math.max(this.right, rect.right),
      bottom: Math.max(this.bottom, rect.bottom),
    })
  }

  equals(other: Rect) {
    return other === this || (other.position.equals(this.position) && other.size.equals(this.size))
  }

  hashCode() {
    return hash([this.position.hashCode(), this.size.hashCode()])
  }

  toString() {
    return `${this.left} ${this.top} ${this.right} ${this.bottom}`
  }

  [UTIL_INSPECT_CUSTOM]() {
    return this.toString()
  }
}

export type RectSides = {
  left: number
  top: number
  right: number
  bottom: number
}
