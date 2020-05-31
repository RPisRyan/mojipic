
export type Maybe<T> = T | undefined

// https://engineering.dollarshaveclub.com/typescript-maybe-type-and-module-627506ecc5c8
// export enum MaybeType {
//   Just = 'maybe-type__just',
//   Nothing = 'maybe-type__nothing',
// }

// export interface Just<T> {
//   type: typeof MaybeType.Just
//   value: T
// }

// export interface Nothing {
//   type: typeof MaybeType.Nothing
// }

// export type Maybe<T>
//   = Just<T>
//   | Nothing

// export const Nothing = (): Nothing => ({
//   type: MaybeType.Nothing,
// })

// export const Just = <T>(value: T): Just<T> => ({
//   type: MaybeType.Just,
//   value,
// })
