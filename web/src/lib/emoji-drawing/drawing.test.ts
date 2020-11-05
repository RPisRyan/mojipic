import { GridPosition } from '../2d/gridPosition'
import { Drawing } from './drawing'

describe('drawing', () => {

  it('can convert from array', () => {
    const array = [
      [_, A, _],
      [_, _, B],
      [C, _, _],
    ]
    const drawing = Drawing.fromArray(array)
    expect(drawing.elements).toEqual([
      [new GridPosition(1, 0), A],
      [new GridPosition(2, 1), B],
      [new GridPosition(0, 2), C],
    ])
  })

  it('can convert from array', () => {
    const array = [
      [_, A, _],
      [_, _, B],
      [C, _, _],
    ]
    const drawing = new Drawing([
      [new GridPosition(1, 0), A],
      [new GridPosition(2, 1), B],
      [new GridPosition(0, 2), C],
    ])
    expect(drawing.toArray()).toEqual(array)
  })

  it('can serialize', () => {
    const drawing = Drawing.fromArray([
      [_, A, _],
      [_, _, B],
      [C, _, _],
    ])

    expect(drawing.toString(true)).toEqual(`
◻️A◻️
◻️◻️B
C◻️◻️
    `.trim())
  })

  it('can deserialize', () => {
    const drawing = Drawing.fromString(`
◻️A◻️
◻️◻️B
C◻️◻️
    `.trim())

    expect(drawing.elements).toEqual([
      [new GridPosition(1, 0), A],
      [new GridPosition(2, 1), B],
      [new GridPosition(0, 2), C]
    ])
  })

})

const A = 'A', B = 'B', C = 'C', D = 'D', _ = null
