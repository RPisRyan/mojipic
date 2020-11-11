import { drawingStore } from './editorState'

export function initConsoleServices() {

  (window as any).Mojipic = {
    loadDrawing: drawingStore.loadDrawing
  }

}
