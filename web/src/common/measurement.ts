
export type NumericRange = {
  min: number
  max: number
}

export function clamp(value: number, range: NumericRange) {
  return Math.min(range.max, Math.max(range.min, value))
}
