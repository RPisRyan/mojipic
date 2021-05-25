import type { Reducer } from 'react'
import type { Convert } from '../functions'
import { makeNamedDispatch, TypeDiscriminated } from './namedDispatch'
import type { Store } from './Store'
import type { Reactive, Subscriber } from './types'

/**
 * A Store which accepts typed actions for state mutations.
 * The provided reducer is used to dispatch an action.
 */
export type DispatchingStore<S, A> = Store<S> &
  Reactive<S> & {
    dispatch(...actions: A[]): void
  }

export function DispatchingStore<S, A>(initial: S, reduce: Reducer<S, A>) {
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
    },
  }
}

export function addNamedDispatch<S, A extends TypeDiscriminated>(store: DispatchingStore<S, A>) {
  return {
    ...store,
    dispatchAction: makeNamedDispatch(store.dispatch),
  }
}

export function storeWithView<S, A, V extends S>(
  store: DispatchingStore<S, A>,
  createView: Convert<S, V>,
): DispatchingStore<V, A> {
  function subscribe(subscriber: Subscriber<V>) {
    return store.subscribe((s) => subscriber(createView(s)))
  }

  return {
    subscribe,
    unsubscribe: store.unsubscribe,
    dispatch: store.dispatch,
    getState() {
      return createView(store.getState())
    },
    setState: store.setState as any, //// todo: fix
  }
}
