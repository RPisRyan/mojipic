import log from 'loglevel'
import type { Toolbox } from '../../lib/emoji-drawing'
import type { Store } from '../../lib/reactives'
import type { DrawingStore } from './drawingStore'

const localStorageKey = 'currentDrawing'

export function persistDrawing(drawingStore: DrawingStore, toolboxStore: Store<Toolbox>) {
  try {
    const drawingLiteral = localStorage.getItem(localStorageKey)
    if (drawingLiteral) {
      log.debug('found local drawing', drawingLiteral)
      drawingStore.loadDrawing(drawingLiteral)
    }
  } catch (ex) {
    log.warn('Failed to load drawing from local storage', ex)
  }

  return drawingStore.subscribe((drawing) => {
    try {
      localStorage.setItem(localStorageKey, drawing.toString())
    } catch (ex) {
      log.warn('Failed to save to local storage', ex)
    }
  })
}
