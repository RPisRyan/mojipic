import { Point } from '../lib/2d/point'
import { Rect } from '../lib/2d/rect'
import { Size } from '../lib/2d/size'
import { glyph } from './glyph'
import { Cell, Drawing } from './drawing'

describe('drawing', () => {

  it('calculates bounds', () => {
    const drawing = Drawing.fromContent([
      [new Point(1, 1), glyph('X')],
      [new Point(2, 5), glyph('Y')]
    ])
    expect(drawing.bounds).toEqual(
      Rect.fromSides({
        left: 1,
        top: 1,
        right: 2,
        bottom: 5
      })
    )
    expect(drawing.bounds.height).toEqual(4)
  })

  it('yields cells', () => {
    const cells: Cell[] = [
      [new Point(1, 1), 'X'],
      [new Point(2, 3), 'Y']
    ]
    const drawing = Drawing.fromContent(cells)

    expect(drawing.getCell(new Point(1, 1))).toEqual('X')

    const result = Array.from(drawing.cells())
    expect(result)
      .toEqual([
        [new Point(1, 1), 'X'],
        [new Point(2, 1), null],
        [new Point(1, 2), null],
        [new Point(2, 2), null],
        [new Point(1, 3), null],
        [new Point(2, 3), 'Y']
      ])
  })

  it('pads to min size', () => {
    const minSize = new Size(4, 4)
    const cells: Cell[] = [
      [new Point(1, 1), 'A'],
      [new Point(2, 5), 'B']
    ]
    const drawing = Drawing.fromContent(cells)
      .padBounds(minSize, minSize)
    expect(drawing.bounds.width).toEqual(minSize.width)
    expect(drawing.bounds.height).toEqual(minSize.height)
  })

  it('pads to min size', () => {
    const minSize = new Size(4, 4)
    const cells: Cell[] = [
      [new Point(1, 1), 'A'],
      [new Point(2, 5), 'B']
    ]
    const drawing = Drawing.fromContent(cells)
      .padBounds(minSize, minSize)
    expect(drawing.bounds.width).toEqual(minSize.width)
    expect(drawing.bounds.height).toEqual(minSize.height)
  })

  it('pads up to max size', () => {
    const minSize = new Size(4, 4)
    const cells: Cell[] = [
      [new Point(5, 5), 'A'],
    ]
    const drawing = Drawing.fromContent(cells).padBounds(
      new Size(2, 2), new Size(2, 4))
    expect(drawing.bounds.width).toEqual(2)
    expect(drawing.bounds.height).toEqual(4)
  })

})