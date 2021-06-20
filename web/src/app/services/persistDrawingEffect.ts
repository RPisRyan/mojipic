import log from 'loglevel'
import type { AtomEffect } from 'recoil'
import type { Drawing } from '../../lib/emoji-drawing'
import { loadDrawingAction } from './drawingActions'

const localStorageKey = 'currentDrawing'

/**
 * Maintain latest drawing in local storage
 */
export const persistDrawingEffect: AtomEffect<Drawing> = ({ setSelf, onSet }) => {
  const loadDrawing = loadDrawingAction(setSelf)
  try {
    const drawingLiteral = localStorage.getItem(localStorageKey)
    if (drawingLiteral) {
      log.debug('found local drawing', drawingLiteral)
      loadDrawing(drawingLiteral)
    }
  } catch (ex) {
    log.warn('Failed to load drawing from local storage', ex)
  }

  onSet((drawing) => {
    try {
      localStorage.setItem(localStorageKey, drawing.toString())
    } catch (ex) {
      log.warn('Failed to save to local storage', ex)
    }
  })
}
