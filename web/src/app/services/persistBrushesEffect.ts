import log from 'loglevel'
import { Glyph, Toolbox } from '../../lib/emoji-drawing'
import { AtomEffect, DefaultValue } from 'recoil'

const localStorageKey = 'recentBrushes'
const maxRecent = 15

/**
 * Maintain recent brushes list in local storage
 */
export const persistBrushesEffect: AtomEffect<Toolbox> = ({ setSelf, onSet }) => {
  try {
    const persisted = localStorage.getItem(localStorageKey)
    if (persisted) {
      const glyphs = Glyph.splitter.splitGraphemes(persisted)
      if (glyphs.length > 0) {
        let newState = Toolbox.default.withRecent(glyphs)
        if (!Glyph.isEmpty(glyphs[0])) {
          newState = newState.withBrush(glyphs[0])
        }
        setSelf(newState)
      }
    }
  } catch (ex) {
    log.warn('Failed to load drawing from local storage', ex)
  }

  onSet((toolbox) => {
    if (toolbox instanceof DefaultValue) {
      return
    }

    try {
      const glyphs = toolbox.recent.slice(0, maxRecent)
      glyphs.reverse()
      localStorage.setItem(localStorageKey, glyphs.join(' '))
    } catch (ex) {
      log.warn('Failed to save to local storage', ex)
    }
  })
}
