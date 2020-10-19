import type { faDiceOne } from '@fortawesome/free-solid-svg-icons'
import { useMemo } from 'react'
import { useHelpState } from './helpState'

export function useHelp() {
  const [state, dispatch] = useHelpState()

  const commands = useMemo(() => ({
    welcome() {
      dispatch('welcome', {})
    },
    done() {
      dispatch('done', {})
    }
  }), [dispatch])

  return {
    ...state,
    ...commands
  }
}
