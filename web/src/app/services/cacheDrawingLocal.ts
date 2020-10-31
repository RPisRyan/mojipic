import { useEffect } from 'react'
import type { Store } from '../../lib/reactives'
import { Drawing } from '../../lib/emoji-drawing'
import { logger } from './logger'

const localStorageKey = 'currentDrawing'

export function cacheDrawingLocal(drawingStore: Store<Drawing>) {
  try {
    const local = localStorage.getItem(localStorageKey)
    if (local) {
      drawingStore.setState(Drawing.fromString(local))
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
