import { useEffect, useState } from 'react'
import { tuple } from '../../util/arrayUtil'
import type { TypeDiscriminated } from './namedDispatch'
import type { Store, StoreWithNamedDispatch } from './store'

export function useStore<S, A>(
  { getState, subscribe, dispatch }: Store<S, A>) {
  const initial = getState()
  const [state, setState] = useState<S>(initial)
  useEffect(() => subscribe(setState), [subscribe])
  return tuple(
    state,
    dispatch
  )
}

export function useStoreWithNamedDispatch<S, A extends TypeDiscriminated>(
  { getState, subscribe, dispatchAction }: StoreWithNamedDispatch<S, A>) {
  const initial = getState()
  const [state, setState] = useState<S>(initial)
  useEffect(() => subscribe(setState), [subscribe])
  return tuple(
    state,
    dispatchAction
  )
}
