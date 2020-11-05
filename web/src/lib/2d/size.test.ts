import { Size } from './size'


describe('size', () => {

  it('checks equality', () => {
    expect(new Size(1, 2)).toEqual(new Size(1, 2))
    expect(Size.zero).toEqual(new Size(0, 0))
    expect(Size.null).toEqual(new Size(NaN, NaN))

  })
})
