export type Store<TState, TAction> = {
  state: TState
  dispatch: (action: TAction) => void
}

export type StoreTuple<TState, TAction> = [TState, (action: TAction) => void]

export function 

export function useProvider<TData>(data: TData) {
  const store = useNewStore()
  const Provider = ({ children }: PropsWithChildren<any>) => (
    React.createElement(Context.Provider)
    < Context.Provider value = { store } >
      { children }
      < /Context.Provider>
  )
  return {
    store, Provider
  }
}