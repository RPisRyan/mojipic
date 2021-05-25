import { useEffect, useState } from 'react'
import { tuple } from '../sequences'
import type { DispatchingStore } from './DispatchingStore'
import type { StoreWithNamedDispatch, TypeDiscriminated } from './namedDispatch'
import type { Store } from './Store'
import type { Reactive } from './types'

export function useReactive<S>(source: Reactive<S>, initial: S) {
  const [state, setState] = useState<S>(initial)
  useEffect(() => source.subscribe(setState), [source.subscribe])
  return tuple(state, source)
}

export function useReducerStore<S, A>({ getState, subscribe, dispatch }: DispatchingStore<S, A>) {
  const initial = getState()
  const [state, setState] = useState<S>(initial)
  useEffect(() => subscribe(setState), [subscribe])
  return tuple(state, dispatch)
}

export function useStore<S>(store: Store<S>) {
  const { getState, setState, subscribe } = store
  const initial = getState()
  const [state, setLocalState] = useState<S>(initial)
  useEffect(() => subscribe(setLocalState), [subscribe])
  return tuple(state, setState, store)
}

export function useStoreWithNamedDispatch<S, A extends TypeDiscriminated>({
  getState,
  subscribe,
  dispatchAction,
}: StoreWithNamedDispatch<S, A>) {
  const initial = getState()
  const [state, setState] = useState<S>(initial)
  useEffect(() => subscribe(setState), [subscribe])
  return tuple(state, dispatchAction)
}
