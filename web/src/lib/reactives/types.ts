import type { TypeDiscriminated } from './namedDispatch'

export type Reactive<T> = {
  subscribe(subscriber: Subscriber<T>): VoidFunction
  unsubscribe(subscriber: VoidFunction): void
}

export type Subscriber<S> = (s: S) => void

export type Dispatcher<A extends TypeDiscriminated> = {
  dispatch(action: A): void
}
