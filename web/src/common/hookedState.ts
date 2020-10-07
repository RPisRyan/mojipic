import { produce } from 'immer'
import type { Draft } from 'immer/dist/internal'
import { useMemo, useState } from 'react'
import type { Callback, UnaryFunction } from '../util/functionUtil'
import type { SetStateFromCurrent as SetStateFromPrevious } from '../util/reactUtil'

export type DispatchStateUpdates<TState> =
  Callback<Callback<Draft<TState>>>

export type ActionsFactory<TState, TActions> =
  UnaryFunction<DispatchStateUpdates<TState>, TActions>

export type Store<TState, TActions> = TState & TActions

export function useActions<TState, TActions>(
  actionsFactory: ActionsFactory<TState, TActions>,
  setState: SetStateFromPrevious<TState>
) {
  return useMemo(() =>
    createActions(actionsFactory, setState),
    [actionsFactory, setState]
  )
}

export function useStore<TState, TActions>(
  createActions: ActionsFactory<TState, TActions>,
  initialState: TState
) {
  const [state, setState] = useState(initialState)
  const actions = useActions(createActions, setState as SetStateFromPrevious<TState>)
  return {
    ...state,
    ...actions
  }
}

export function useStoreWithViews<TState, TViews, TActions>(
  createViews: UnaryFunction<TState, TViews>,
  createActions: ActionsFactory<TState, TActions>,
  initialState: TState
) {
  const [state, setState] = useState(initialState)
  const views = createViews(state)
  const actions = useActions(createActions, setState as SetStateFromPrevious<TState>)
  return {
    ...state,
    ...views,
    ...actions
  }
}

function createActions<TState, TActions>(
  factory: ActionsFactory<TState, TActions>,
  setState: SetStateFromPrevious<TState>
): TActions {
  function dispatch(performUpdates: Callback<Draft<TState>>) {
    setState(current =>
      produce(current, draft => performUpdates(draft))
    )
  }
  return factory(dispatch)
}
