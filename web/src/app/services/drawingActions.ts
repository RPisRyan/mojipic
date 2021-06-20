import { Drawing } from '../../lib/emoji-drawing'
import { drawingSettings } from './editorState'

export function loadDrawingAction(setDrawing: (d: Drawing) => void) {
  return function loadDrawing(literal: string) {
    const loaded = Drawing.fromString(literal)
    if (!loaded.isEmpty) {
      setDrawing(loaded.paddedTo(drawingSettings.minSize))
    }
  }
}
