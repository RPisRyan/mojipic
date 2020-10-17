import { useMemo } from 'react'
import { useHelpState } from '../state/helpState'

export function useEditorModel() {
  const [help, dispatchHelp] = useHelpState()

  const commands = useMemo(() => ({
    // todo: helper function for forwarding nullary actions as commands
    showWelcome() {
      // todo: make action name first argument for dispatch() ??
      dispatchHelp({ action: 'welcome' })
    },
    helpDone() {
      dispatchHelp({ action: 'done' })
    }
  }), [dispatchHelp])

  return {
    ...help,
    ...commands
  }
}
