import { useMemo } from 'react'
import { drawingToString } from '../../domain/drawing/drawingFunctions'
import { Drawing } from '../../domain/immutable/drawing'
import { Toolbox } from '../../domain/immutable/toolbox'
import { getNotifier } from '../../domain/services'
import type { Point } from '../../lib/2d/point'
import { Size } from '../../lib/2d/size'
import { useStore } from '../../lib/reactive-core/hooks'
import { Store } from '../../lib/reactive-core/Store'

const minDrawingSize = new Size(5, 5)
const maxDrawingSize = new Size(12, 8)

const drawingStore = Store(new Drawing([]))
export const useDrawing = () => useStore(drawingStore)

const toolboxStore = Store(Toolbox.default)
export const useToolbox = () => useStore(toolboxStore)

export function useEditor() {
  const [drawing, setDrawing] = useDrawing()
  const [toolbox] = useToolbox()

  const commands = useMemo(() => ({
    applyTool(position: Point) {
      setDrawing(
        toolbox.activeTool.apply(drawing, position)
          .padBounds(minDrawingSize, maxDrawingSize)
      )
    },


    async copyToClipboard() {
      const serialized = drawingToString(drawing.toArray())
      // browser dependencies should be injectable
      await navigator.clipboard.writeText(serialized)
      getNotifier().success('copied')
    }
  }), [])

  return {
    drawing,
    toolbox,
    ...commands
  }
}

// const commandsOld = {
//   loadDrawing(drawing: Drawing) {
//     canvasStore.dispatchAction('setDrawing', { drawing })
//     toolboxStore.dispatchAction('addRecent', { glyphs: uniqueGlyphs(drawing) })
//   },

//   activateTool(tool: ToolType) {
//     toolboxStore.dispatchAction('havingActive', { tool })
//   },

//   pickBrush(brush: Glyph) {
//     toolboxStore.dispatchAction('havingBrush', { brush })
//   },

//   applyTool(position: CellPosition) {
//     const canvas = canvasStore.getState()
//     const toolbox = toolboxStore.getState()
//     const { drawing } = canvas
//     const isWithin = isWithinDrawing(position, drawing)
//     switch (toolbox.activeToolType) {
//       case 'paint':
//         canvasStore.dispatch({
//           type: 'paintCell',
//           glyph: toolbox.brush,
//           position
//         })
//         return
//       case 'eraser':
//         if (isWithin) {
//           canvasStore.dispatch({
//             type: 'eraseCell',
//             position
//           })
//         }
//         return
//     }
//   },

//   undo() {
//     canvasStore.dispatchAction('undo', {})
//   },

//   clear() {
//     canvasStore.dispatchAction('clear', {})
//   },

//   async copyToClipboard() {
//     const canvas = canvasStore.getState()
//     const serialized = drawingToString(canvas.drawing)
//     // browser dependencies should be injectable
//     await navigator.clipboard.writeText(serialized)
//     getNotifier().success('copied')
//   }
// }
