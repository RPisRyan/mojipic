export function tuple<T extends any[]>(...elements: T) {
  return elements
}

export function filledArray2D<T>(width: number, height: number, value: T) {
  return [...new Array(height)].map(() => filledArray(width, value))
}

export function filledArray<T>(length: number, value: T) {
  return [...new Array(length)].fill(value)
}
