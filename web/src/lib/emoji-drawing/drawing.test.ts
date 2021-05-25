import { Size } from '../2d'
import { GridPosition } from '../2d/gridPosition'
import { Drawing } from './drawing'
import { Glyph } from './glyph'
import { Map } from 'immutable'

describe('drawing', () => {
  it('can convert from array', () => {
    const array = [
      [_, A, _],
      [_, _, B],
      [C, _, _],
    ]
    const drawing = Drawing.fromArray(array)
    expect(drawing.elements.length).toEqual(9)
    expect(drawing.elements).toContainEqual([new GridPosition(1, 0), A])
    expect(drawing.elements).toContainEqual([new GridPosition(2, 1), B])
    expect(drawing.elements).toContainEqual([new GridPosition(0, 2), C])
  })

  it('can convert to array', () => {
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
      [_, '😄', _],
      [_, _, '👌'],
      ['🏈', _, _],
    ])

    expect(drawing.toString(true)).toEqual(
      `
◻️😄◻️
◻️◻️👌
🏈◻️◻️
    `.trim(),
    )
  })

  it('can deserialize', () => {
    const drawing = Drawing.fromString(
      `
◻️😄◻️
◻️◻️👌
🏈◻️◻️
    `.trim(),
    )

    expect(drawing.elements).toContainEqual([new GridPosition(1, 0), '😄'])
    expect(drawing.elements).toContainEqual([new GridPosition(2, 1), '👌'])
    expect(drawing.elements).toContainEqual([new GridPosition(0, 2), '🏈'])
  })

  it('can crop to content', () => {
    const drawing = Drawing.fromArray([
      [_, A, _],
      [_, _, _],
    ])
    const cropped = drawing.croppedToContent(new Size(2, 2))
    const expected = [
      [_, A],
      [_, _],
    ]
    expect(cropped.bounds.size).toEqual(new Size(2, 2))
    expect(cropped.elements).toEqual(Drawing.fromArray(expected).elements)
  })

  it('can pad to size', () => {
    const drawing = Drawing.fromArray([
      [_, A],
      [_, _],
    ])
    const padded = drawing.paddedTo(new Size(3, 4))
    const expected = [
      [_, _, _],
      [_, _, _],
      [_, A, _],
      [_, _, _],
    ]
    expect(padded.bounds.size).toEqual(new Size(3, 4))
    expect(padded.elements.length).toEqual(12)
    expect(padded.toArray()).toEqual(expected)
  })
})

const A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  _ = Glyph.none
