import type { Reactive, Subscriber, Store } from './types'

export function Store<S>(initial: S): Store<S> {
  let current = initial
  const subscribers = new Set<Subscriber<S>>()

  function subscribe(subscriber: Subscriber<S>) {
    subscribers.add(subscriber)
    return () => unsubscribe(subscriber as VoidFunction)
  }

  function unsubscribe(subscriber: VoidFunction) {
    subscribers.delete(subscriber)
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
    getState() {
      return current
    },
    setState(setter: S | ((s: S) => S)) {
      if (typeof setter === 'function') {
        writeState((setter as ((s: S) => S))(current))
      } else {
        writeState(setter as S)
      }
    }
  }

}
