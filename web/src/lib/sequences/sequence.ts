import fluent, { FluentIterable } from 'fluent-iterable'

export type Sequence<T> = FluentIterable<T>

export const sequence = fluent
