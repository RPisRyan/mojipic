import log from 'loglevel'
import { Drawing, Glyph, Toolbox } from '../../lib/emoji-drawing'
import type { Store } from '../../lib/reactives'

const localStorageKey = 'recentBrushes'
const maxRecent = 15

export function persistRecentBrushes(toolboxStore: Store<Toolbox>) {
  try {
    const persisted = localStorage.getItem(localStorageKey)
    if (persisted) {
      const glyphs = Glyph.splitter.splitGraphemes(persisted)
      toolboxStore.setState(
        toolboxStore.getState().withRecent(glyphs))
    }
  }
  catch (ex) {
    log.warn('Failed to load drawing from local storage', ex)
  }

  return toolboxStore.subscribe(toolbox => {
    try {
      localStorage.setItem(localStorageKey, toolbox.recent.slice(0, maxRecent).join(' '))
    }
    catch (ex) {
      log.warn("Failed to save to local storage", ex)
    }
  })
}