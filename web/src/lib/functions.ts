export type VoidFunction = () => void

export type NullaryFunction<R> = () => R

export type UnaryFunction<A, R> = (a: A) => R

export type BinaryFunction<A1, A2, R> = (a1: A1, a2: A2) => R

export type Callback<T> = UnaryFunction<T, void>

export type Produce<T> = NullaryFunction<T>

export type Convert<A, R> = UnaryFunction<A, R>

export type Predicate<T> = UnaryFunction<T, boolean>

export function tap<T>(t: T): T {
  console.log(`tap ${typeof t}`, t)
  return t
}

export function times(numberOf: number) {
  return (callback: Callback<number>) => {
    for (let i = 0; i < numberOf; i++) callback(i)
  }
}
