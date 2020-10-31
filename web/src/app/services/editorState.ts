import { useMemo } from 'react'
import { Glyph, Toolbox, ToolType } from '../../lib/emoji-drawing'
import { Drawing } from '../../lib/emoji-drawing/drawing'
import type { Point } from '../../lib/2d/point'
import { Size } from '../../lib/2d/size'
import { useStore } from '../../lib/reactives/hooks'
import { Store } from '../../lib/reactives/Store'
import { notify as notifier } from './notification'
import { cacheDrawingLocal } from './cacheDrawingLocal'

const minDrawingSize = new Size(5, 5)
const maxDrawingSize = new Size(12, 8)

const defaultDrawing = Drawing.fromString(` 🌈 \n🌈⭐️✨\n 🌈 `)

export const drawingStore = Store(defaultDrawing)
export const useDrawing = () => useStore(drawingStore)

export const toolboxStore = Store(Toolbox.default)
export const useToolbox = () => useStore(toolboxStore)

cacheDrawingLocal(drawingStore)

export function useEditor() {
  const [drawing, setDrawing] = useDrawing()
  const [toolbox, setToolbox] = useToolbox()

  const commands = useMemo(() => ({
    activateTool(tool: ToolType) {
      setToolbox(it => it.withActiveTool(tool))
    },

    pickBrush(brush: Glyph) {
      setToolbox(it => it.withBrush(brush))
    },

    applyTool(position: Point) {
      setDrawing(it =>
        toolbox.activeTool.apply(it, position)
          .padBounds(minDrawingSize, maxDrawingSize)
      )
    },

    async copyToClipboard() {
      // browser dependencies should be injectable
      await navigator.clipboard.writeText(drawing.toString())
      notifier.success('copied')
    }
  }), [drawing, toolbox, setDrawing, setToolbox])  // any point to useMemo() when we are dependent on everything??

  return {
    drawing,
    toolbox,
    ...commands
  }
}
