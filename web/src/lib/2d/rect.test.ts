import { Point } from './point'
import { Rect } from './rect'
import { Size } from './size'

describe('rect', () => {

  it('can enclose points', () => {

    const rect1 = Rect.null.enclosePoint(new Point(1, 1))
    expect(rect1.position).toEqual(new Point(1, 1))
    expect(rect1.size).toEqual(new Size(0, 0))

    const rect2 = rect1.enclosePoint(new Point(2, 3))
    expect(rect2.position).toEqual(new Point(1, 1))
    expect(rect2.size).toEqual(new Size(1, 2))
  })

  it('can adjust size', () => {

    const rect = Rect.fromSides({
      left: 2,
      top: 2,
      right: 5,
      bottom: 6
    })

    expect(rect.withLeftMoved(-10))
      .toEqual(Rect.fromSides({
        left: -8,
        top: 2,
        right: 5,
        bottom: 6
      }))

    expect(rect.withTopMoved(1))
      .toEqual(Rect.fromSides({
        left: 2,
        top: 3,
        right: 5,
        bottom: 6
      }))
  })

})