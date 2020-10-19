import type { Reducer } from 'react'
import type { Convert } from '../../util/functionUtil'
import { makeNamedDispatch, NamedDispatch, TypeDiscriminated } from './namedDispatch'

export function createStore<S, A>(
  initial: S,
  reduce: Reducer<S, A>) {
  let current = initial
  const subscribers = new Set<Subscriber<S>>()

  function subscribe(subscriber: Subscriber<S>) {
    subscribers.add(subscriber)
    return () => unsubscribe(subscriber as VoidFunction)
  }

  function unsubscribe(subscriber: VoidFunction) {
    subscribers.delete(subscriber)
  }

  function dispatch(...actions: A[]) {
    let newState = current
    for (const action of actions) {
      newState = reduce(newState, action)
    }
    writeState(newState)
  }

  function writeState(newState: S) {
    current = newState
    for (const subscriber of subscribers) {
      subscriber(newState)
    }
  }

  return {
    subscribe,
    unsubscribe,
    dispatch,
    getState() {
      return current
    },
    setState(value: S) {
      writeState(value)
    }
  }
}

export function addNamedDispatch<S, A extends TypeDiscriminated>(
  store: Store<S, A>
) {
  return {
    ...store,
    dispatchAction: makeNamedDispatch(store.dispatch)
  }
}

export function storeWithView<S, A, V extends S>(
  store: Store<S, A>,
  createView: Convert<S, V>
): Store<V, A> {
  function subscribe(subscriber: Subscriber<V>) {
    return store.subscribe(s => subscriber(createView(s)))
  }

  return {
    subscribe,
    unsubscribe: store.unsubscribe,
    dispatch: store.dispatch,
    getState() {
      return createView(store.getState())
    },
    setState: store.setState
  }
}

export type Store<S, A> = {
  subscribe(subscriber: Subscriber<S>): VoidFunction
  unsubscribe(subscriber: VoidFunction): void
  dispatch(...actions: A[]): void
  getState(): S
  setState(s: S): void
}

export type StoreWithNamedDispatch<S, A extends TypeDiscriminated> =
  Store<S, A> & {
    dispatchAction: NamedDispatch<A>
  }

export type Subscriber<S> = (s: S) => void
