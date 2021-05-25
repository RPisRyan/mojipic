import { Drawing } from '../../lib/emoji-drawing'
import { Store } from '../../lib/reactives'
import { drawingSettings } from './editorState'

export type DrawingStore = ReturnType<typeof DrawingStore>

export function DrawingStore(initial: Drawing) {
  const store = Store(initial)

  const methods = {
    loadDrawing(literal: string) {
      const drawing = Drawing.fromString(literal)
      if (!drawing.isEmpty) {
        store.setState(drawing.paddedTo(drawingSettings.minSize))
      }
    },
  }

  return {
    ...store,
    ...methods,
  }
}
