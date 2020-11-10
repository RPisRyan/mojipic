import { Store, useStore } from '../../lib/reactives'
import { analytics } from './firebase'

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

  function logView() {
    analytics.logEvent('screen_view', {
      app_name: 'mojipic',
      screen_name: 'help'
    })
  }

  const commands = {
    hideGettingStarted() {
      setHelp({})
      localStorage.setItem(seenGreetingKey, 'true')
    },
    openHelp() {
      setHelp({ showHelp: true })
      logView()
    },
    closeHelp() {
      setHelp({})
    },
    toggleHelp() {
      const showHelp = !help.showHelp
      setHelp({ showHelp })
      if (showHelp) {
        logView()
      }
    }
  }

  return {
    help,
    ...commands
  }
}
