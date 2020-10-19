import { getNotifier } from '../../domain/services'
import { canvasStore, useCanvasState } from './canvasState'
import { CellPosition, Drawing, drawingToString, Glyph, isWithinDrawing, uniqueGlyphs } from '../../domain/drawing'
import { toolboxStore, ToolType, useToolboxState } from './toolboxState'

export function useEditor() {
  const [canvas] = useCanvasState()
  const [toolbox] = useToolboxState()
  return {
    canvas,
    toolbox,
    ...commands
  }
}

const commands = {
  loadDrawing(drawing: Drawing) {
    canvasStore.dispatchAction('setDrawing', { drawing })
    toolboxStore.dispatchAction('addRecent', { glyphs: uniqueGlyphs(drawing) })
  },

  activateTool(tool: ToolType) {
    toolboxStore.dispatchAction('havingActive', { tool })
  },

  pickBrush(brush: Glyph) {
    toolboxStore.dispatchAction('havingBrush', { brush })
  },

  applyTool(position: CellPosition) {
    const canvas = canvasStore.getState()
    const toolbox = toolboxStore.getState()
    const { drawing } = canvas
    const isWithin = isWithinDrawing(position, drawing)
    switch (toolbox.activeToolType) {
      case 'paint':
        canvasStore.dispatch({
          type: 'paintCell',
          glyph: toolbox.brush,
          position
        })
        return
      case 'eraser':
        if (isWithin) {
          canvasStore.dispatch({
            type: 'eraseCell',
            position
          })
        }
        return
    }
  },

  undo() {
    canvasStore.dispatchAction('undo', {})
  },

  clear() {
    canvasStore.dispatchAction('clear', {})
  },

  async copyToClipboard() {
    const canvas = canvasStore.getState()
    const serialized = drawingToString(canvas.drawing)
    // browser dependencies should be injectable
    await navigator.clipboard.writeText(serialized)
    getNotifier().success('copied')
  }
}
