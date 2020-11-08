import log from 'loglevel'
import { Drawing } from '../../lib/emoji-drawing'
import type { Store } from '../../lib/reactives'
import { drawingSettings } from './editorState'
import { logger } from './logger'

const localStorageKey = 'currentDrawing'

export function cacheDrawingLocal(drawingStore: Store<Drawing>) {
  try {
    const local = localStorage.getItem(localStorageKey)
    if (local) {
      log.debug('found local drawing', local)
      const drawing = Drawing.fromString(local)
      if (!drawing.isEmpty) {
        drawingStore.setState(
          Drawing.fromString(local).paddedTo(drawingSettings.minSize)
        )
      }
    }
  }
  catch (ex) {
    logger.warn('Failed to load drawing from local storage', ex)
  }

  return drawingStore.subscribe(drawing => {
    try {
      localStorage.setItem(localStorageKey, drawing.toString())
    }
    catch (ex) {
      logger.warn("Failed to save to local storage", ex)
    }
  })
}
