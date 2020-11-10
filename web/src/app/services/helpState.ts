import { Store, useStore } from '../../lib/reactives'

const seenGreetingKey = 'seenGreeting'

type HelpState = {
  showGreeting?: boolean
  showHelp?: boolean
}

const initial: HelpState = {
  showGreeting: !localStorage.getItem(seenGreetingKey),
}

export const helpStore = Store<HelpState>(initial)

export function useHelp() {
  const [help, setHelp] = useStore(helpStore)

  const commands = {
    hideGettingStarted() {
      setHelp({})
      localStorage.setItem(seenGreetingKey, 'true')
    },
    openHelp() {
      setHelp({ showHelp: true })
    },
    closeHelp() {
      setHelp({})
    },
    toggleHelp() {
      setHelp({ showHelp: !help.showHelp })
    }
  }

  return {
    help,
    ...commands
  }
}
