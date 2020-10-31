
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
