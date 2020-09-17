import { Drawing, drawingFromString, drawingToString } from '../domain/Editor/Drawing'

const localStorageKey = 'currentDrawing'

export function saveLocal(drawing: Drawing) {
  localStorage.setItem(localStorageKey, drawingToString(drawing))
}

export function loadLocal(): Drawing | null {
  const serialized = localStorage.getItem(localStorageKey)
  return serialized == null
    ? null
    : drawingFromString(serialized)
}
