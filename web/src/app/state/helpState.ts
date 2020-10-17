import { createStore } from '../../packs/essential-store/store'
import { useStore } from '../../packs/essential-store/useStore'

export type HelpState = {
  welcomeVisible?: true
  helpVisible?: true
}

export type HelpAction = { action: 'help' }
  | { action: 'welcome' }
  | { action: 'done' }

function reduce(_: HelpState, action: HelpAction): HelpState {
  switch (action.action) {
    case 'welcome':
      return { welcomeVisible: true }
    case 'help':
      return { helpVisible: true }
    case 'done':
      return {}
  }
}

const initialState = {}

export const helpStore = createStore(initialState, reduce)

export const useHelpState = () => useStore(helpStore)
