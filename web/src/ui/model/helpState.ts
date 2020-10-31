import { DispatchingStore, addNamedDispatch } from '../../lib/reactive-core/DispatchingStore'
import { useStoreWithNamedDispatch } from '../../lib/reactive-core/hooks'

export type HelpState = {
  welcomeVisible?: true
  helpVisible?: true
}

export type HelpAction = { type: 'help' }
  | { type: 'welcome' }
  | { type: 'done' }

function reduce(_: HelpState, action: HelpAction): HelpState {
  switch (action.type) {
    case 'welcome':
      return { welcomeVisible: true }
    case 'help':
      return { helpVisible: true }
    case 'done':
      return {}
    default: {
      exhaustiveCheck()
    }
  }
}

function exhaustiveCheck(): never {
  throw new Error("Missing type")
}

const initialState = {}

export const helpStore = addNamedDispatch(DispatchingStore(initialState, reduce))

export const useHelpState = () => useStoreWithNamedDispatch(helpStore)
