import { useEffect, useState } from 'react'
import { tuple } from '../../util/arrayUtil'
import type { Store } from './store'

export function useStore<S, A>(
  { subscribe, dispatch, state: initial }: Pick<Store<S, A>, 'dispatch' | 'subscribe' | 'state'>) {
  const [state, setState] = useState<S>(initial)
  useEffect(() => subscribe(setState), [subscribe])
  return tuple(
    state,
    dispatch
  )
}
