import { GlyphArray, glyphArrayFromString, glyphArrayToString } from '../domain/glyph'

const localStorageKey = 'currentDrawing'

export function saveLocal(array: GlyphArray) {
  localStorage.setItem(localStorageKey, glyphArrayToString(array))
}

export function loadLocal(): GlyphArray | null {
  const serialized = localStorage.getItem(localStorageKey)
  return serialized == null
    ? null
    : glyphArrayFromString(serialized)
}
