import { Grid } from './grid'
import { GridPosition } from './gridPosition'

describe('grid', () => {

  it('can set', () => {
    const grid = Grid.Empty
      .set([new GridPosition(1, 1), 'A'])
      .set([new GridPosition(2, 2), 'B'])
    expect(grid.elements)
      .toEqual([
        [new GridPosition(1, 1), 'A'],
        [new GridPosition(2, 2), 'B']
      ])
  })

  it('can delete', () => {
    const grid = Grid.Empty
      .set([new GridPosition(1, 1), 'A'])
      .set([new GridPosition(2, 2), 'B'])
      .delete(new GridPosition(1, 1))
    expect(grid.elements)
      .toEqual([
        [new GridPosition(2, 2), 'B']
      ])
  })

})