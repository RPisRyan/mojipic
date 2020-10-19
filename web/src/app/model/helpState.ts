import { createStore, addNamedDispatch } from '../../packs/essential-store/store'
import { useStoreWithNamedDispatch } from '../../packs/essential-store/useStore'

export type HelpState = {
  welcomeVisible?: true
  helpVisible?: true
}

export type HelpAction = { type: 'help' }
  | { type: 'welcome' }
  | { type: 'done' }

function reduce(_: HelpState, action: HelpAction): HelpState {
  console.log({ action })
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

export const helpStore = addNamedDispatch(createStore(initialState, reduce))

export const useHelpState = () => useStoreWithNamedDispatch(helpStore)
