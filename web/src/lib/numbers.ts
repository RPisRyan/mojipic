export function clamp([min, max]: [number, number], value: number) {
  return atLeast(min, atLeast(max, value))
}

export function atLeast(min: number, value: number) {
  return Math.max(min, value)
}

export function atMost(max: number, value: number) {
  return Math.min(max, value)
}
