import log from 'loglevel'
import { Drawing, Toolbox } from '../../lib/emoji-drawing'
import type { Store } from '../../lib/reactives'
import { drawingSettings } from './editorState'

const localStorageKey = 'currentDrawing'

export function persistDrawing(drawingStore: Store<Drawing>, toolboxStore: Store<Toolbox>) {
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
    log.warn('Failed to load drawing from local storage', ex)
  }

  return drawingStore.subscribe(drawing => {
    try {
      localStorage.setItem(localStorageKey, drawing.toString())
    }
    catch (ex) {
      log.warn("Failed to save to local storage", ex)
    }
  })
}
