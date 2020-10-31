import type { TypeDiscriminated } from './namedDispatch'

export type Store<S> = Reactive<S> & {
  getState(): S
  setState(setter: S | ((s: S) => S)): void
}

export type DispatchingStore<S, A> = Store<S>
  & Reactive<S>
  & {
    dispatch(...actions: A[]): void
  }

export type Reactive<T> = {
  subscribe(subscriber: Subscriber<T>): VoidFunction
  unsubscribe(subscriber: VoidFunction): void
}

export type Subscriber<S> = (s: S) => void

export type Dispatcher<A extends TypeDiscriminated> = {
  dispatch(action: A): void
}

export type StringSerialize<T> = {
  asString: (t: T) => string,
  fromString: (s: string) => T
}
