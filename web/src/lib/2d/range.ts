export type Range<T> = [T, T]
export type NumberRange = Range<number>

export const emptyRange: NumberRange = [0, 0]

export function clamp(value: number, range: NumberRange) {
  return Math.min(range[1], Math.max(range[0], value))
}

export function isValidRange(range: NumberRange) {
  return range[1] >= range[0]
}

export function intersectRanges(a: NumberRange, b: NumberRange) {
  const result: NumberRange = [Math.max(a[0], b[0]), Math.min(a[1], b[1])]
  if (result[1] < result[0]) {
    return [result[1], result[0]]
  }
  return result
}
