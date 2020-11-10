import { Store, useStore } from '../../lib/reactives'

const seenGreetingKey = 'seenGreeting'

type HelpState = {
  showGreeting: boolean
}

const initial: HelpState = {
  showGreeting: !localStorage.getItem(seenGreetingKey)
}

export const helpStore = Store<HelpState>(initial)

export function useHelp() {
  const [help, setHelp] = useStore(helpStore)

  const commands = {
    hideGettingStarted() {
      setHelp(it => ({
        ...it,
        showGreeting: false
      }))
      localStorage.setItem(seenGreetingKey, 'true')
    }
  }

  return {
    help,
    ...commands
  }
}
