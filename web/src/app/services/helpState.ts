import { analytics } from './firebase'
import { atom, useRecoilState } from 'recoil'

const seenGreetingKey = 'seenGreeting'

type HelpState = {
  showGreeting?: boolean
  showHelp?: boolean
}

const initial: HelpState = {
  showGreeting: !localStorage.getItem(seenGreetingKey),
}

export const helpAtom = atom({
  key: 'help',
  default: initial,
})

export function useHelp() {
  const [help, setHelp] = useRecoilState(helpAtom)

  function logView() {
    analytics.logEvent('screen_view', {
      app_name: 'mojipic',
      screen_name: 'help',
    })
  }

  const commands = {
    hideGettingStarted() {
      setHelp({})
      localStorage.setItem(seenGreetingKey, 'true')
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
    },
  }

  return {
    help,
    ...commands,
  }
}
