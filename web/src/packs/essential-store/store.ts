import type { Dispatch, Reducer } from 'react'

export function createStore<S, A>(initial: S, reduce: Reducer<S, A>) {
  let current = initial
  const subscribers = new Set<Subscriber<S>>()

  function subscribe(subscriber: Subscriber<S>) {
    subscribers.add(subscriber)
    return () => unsubscribe(subscriber)
  }

  function unsubscribe(subscriber: Subscriber<S>) {
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
    get state() {
      return current
    },
    set state(value: S) {
      writeState(value)
    }
  }
}

export type Store<S, A> = {
  subscribe(subscriber: Subscriber<S>): VoidFunction
  unsubscribe(subscriber: Subscriber<S>): void
  // dispatch: Dispatch<A>
  dispatch(...actions: A[]): void
  state: S
}

export type Subscriber<S> = (s: S) => void

