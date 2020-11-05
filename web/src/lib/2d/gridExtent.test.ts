import { GridExtent } from './gridExtent'
import { GridPosition } from './gridPosition'

describe('gridExtent', () => {

  it('can include points', () => {
    const pos1 = new GridPosition(1, 3)
    const pos2 = new GridPosition(4, 1)
    expect(GridExtent.Null.include(pos1).include(pos2))
      .toEqual(
        new GridExtent(
          new GridPosition(1, 1),
          new GridPosition(4, 3))
      )
  })

  it('can expand', () => {
    const extent = new GridExtent(
      new GridPosition(0, 0),
      new GridPosition(2, 3)
    )
    expect(extent.expand(1)).toEqual(
      new GridExtent(
        new GridPosition(-1, -1),
        new GridPosition(3, 4)
      )
    )
  })

  it('calculates dimensions', () => {
    const extent = new GridExtent(
      new GridPosition(0, 0),
      new GridPosition(2, 3)
    )
    expect(extent.width).toEqual(3)
    expect(extent.height).toEqual(4)
  })

})