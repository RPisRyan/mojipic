import { getCanvasState, getToolboxState, updateCanvas, updateToolbox } from '../globalState'
import { getNotifier } from '../services'
import { maxDrawingSize } from './canvas/canvasState'
import { havingDrawing, havingGlyphAt, havingUndoneDrawing, havingPushedDrawingHistory, havingTrimmedDrawing } from './canvas/canvasUpdates'
import { CellPosition, drawingToString, emptyDrawing, emptyGlyph, getDrawingSize, Glyph, isWithinDrawing } from './canvas/drawing'
import type { ToolType } from './toolbox/toolboxState'
import { havingActive, havingBrush } from './toolbox/toolboxUpdates'

// These happen to be static, but that is implementation detail.
// They will still be exposed to callers via hook.
const functions = {
  activateTool(tool: ToolType) {
    updateToolbox(
      havingActive(tool)
    )
  },

  pickBrush(brush: Glyph) {
    updateToolbox(
      havingBrush(brush),
      havingActive('paint')
    )
  },

  applyTool(position: CellPosition) {
    const canvas = getCanvasState()
    const toolbox = getToolboxState()
    const { drawing } = canvas
    const isWithin = isWithinDrawing(position, drawing)
    switch (toolbox.activeToolType) {
      case 'paint':
        const size = getDrawingSize(drawing)
        if (
          !isWithin &&
          (size.columns >= maxDrawingSize || size.rows >= maxDrawingSize)
        ) {
          return
        }
        updateCanvas(
          havingPushedDrawingHistory(),
          havingGlyphAt(toolbox.brush, position)
        )
        return
      case 'eraser':
        if (isWithin) {
          updateCanvas(
            havingPushedDrawingHistory(),
            havingGlyphAt(emptyGlyph, position),
          )
          updateCanvas(
            havingTrimmedDrawing()
          )
        }
        return
    }
  },

  undo() {
    updateCanvas(
      havingUndoneDrawing()
    )
  },

  clear() {
    updateCanvas(
      havingDrawing(emptyDrawing())
    )
  },

  async copyToClipboard() {
    const canvas = getCanvasState()
    const serialized = drawingToString(canvas.drawing)
    // browser dependencies should be injectable
    await navigator.clipboard.writeText(serialized)
    getNotifier().success('copied')
  }
}

export function useEditorCommands() {
  return functions
}
