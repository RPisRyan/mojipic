
export function tuple<T extends any[]>(...elements: T) {
  return elements
}

export function empty2d(width: number, height: number) {
  const makeNull = () => null
  return Array.from(
    new Array(height),
    () => Array.from(new Array(width), makeNull)
  )
}

export function filledArray2D<T>(width: number, height: number, value: T) {
  return [...new Array(height)]
    .map(() => filledArray(width, value))
}

export function filledArray<T>(length: number, value: T) {
  return [...new Array(length)].fill(value)
}
