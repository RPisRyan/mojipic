import { Stack } from './stack'

describe('stack', () => {
  it('can push', () => {
    const stack = new Stack([1, 2])
    expect(stack.pushed(9)).toEqual(new Stack([1, 2, 9]))
  })

  it('can limit size', () => {
    const stack = new Stack([1, 2, 3], 3)
    expect(stack.pushed(9)).toEqual(new Stack([2, 3, 9], 3))
  })
})
