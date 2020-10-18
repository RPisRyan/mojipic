import { useEffect, useState } from 'react'
import { tuple } from '../../util/arrayUtil'
import { makeBinaryDispatch, TypeDiscriminated } from './binaryDispatch'
import type { Store } from './store'

export function useStore<S, A>(
  { subscribe, dispatch, state: initial }: Store<S, A>) {
  const [state, setState] = useState<S>(initial)
  useEffect(() => subscribe(setState), [subscribe])
  return tuple(
    state,
    dispatch
  )
}

export function useStoreWithNiceDispatch<S, A extends TypeDiscriminated>(
  { subscribe, dispatch, state: initial }: Store<S, A>) {
  const [state, setState] = useState<S>(initial)
  useEffect(() => subscribe(setState), [subscribe])
  return tuple(
    state,
    makeBinaryDispatch<A>(dispatch)
  )
}
