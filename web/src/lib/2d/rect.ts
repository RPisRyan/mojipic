import { Record } from 'immutable'
import { Point } from './point'
import { Size } from './size'

export class Rect
  extends Record({
    x: NaN,
    y: NaN,
    width: NaN,
    height: NaN
  })
  implements RectSides {

  static fromPosition(position: Point, size: Size) {
    return new Rect({
      x: position.x,
      y: position.y,
      width: size.width,
      height: size.height
    })
  }

  static fromSides({ left, top, right, bottom }: RectSides) {
    return new Rect({
      x: left,
      y: top,
      width: Math.max(0, right - left),
      height: Math.max(0, bottom - top)
    })
  }

  static zero = Rect.fromPosition(Point.zero, Size.zero)
  static null = new Rect()

  get left() {
    return this.x
  }
  get top() {
    return this.y
  }
  get right() {
    return this.x + this.width
  }
  get bottom() {
    return this.top + this.height
  }

  adjustSize(direction: keyof RectSides, increment: number = 1) {
    switch (direction) {
      case 'left':
        return this.set('x', this.x - increment)
          .set('width', this.width + increment)
      case 'top':
        return this.set('y', this.y - increment)
          .set('height', this.height + increment)
      case 'right':
        return this.set('width', this.width + increment)
      case 'bottom':
        return this.set('height', this.height + increment)
    }
  }

  enclosePoint(point: Point) {
    if (this.equals(Rect.null)) {
      return Rect.fromPosition(point, Size.zero)
    }

    if (point.equals(Point.null)) {
      return this
    }

    return Rect.fromSides({
      left: Math.min(this.left, point.x),
      top: Math.min(this.top, point.y),
      right: Math.max(this.right, point.x),
      bottom: Math.max(this.bottom, point.y)
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
      bottom: Math.max(this.bottom, rect.bottom)
    })
  }
}

export type RectSides = {
  left: number
  top: number
  right: number
  bottom: number
}
