
export function tap<T>(t: T): T {
  console.log(`tap ${typeof t}`, t)
  return t
}
