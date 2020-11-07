import { Glyph, Toolbox, ToolType } from '../../lib/emoji-drawing'
import { Drawing } from '../../lib/emoji-drawing/drawing'
import { Size } from '../../lib/2d/size'
import { useStore } from '../../lib/reactives/hooks'
import { Store } from '../../lib/reactives/Store'
import { notify as notifier } from './notification'
import { cacheDrawingLocal } from './cacheDrawingLocal'
import type { GridPosition } from '../../lib/2d/gridPosition'
import { Stack } from '../../lib/immutable-objects/stack'

export const minDrawingSize = new Size(5, 5)
export const maxDrawingSize = new Size(12, 8)
const undoStackLimit = 20

const defaultDrawing = Drawing.fromString(` 🌈 \n🌈⭐️✨\n 🌈 `)

export const drawingStore = Store(defaultDrawing)
export const useDrawing = () => useStore(drawingStore)

export const toolboxStore = Store(Toolbox.default)
export const useToolbox = () => useStore(toolboxStore)

const historyStore = Store(new Stack<Drawing>([], 20))
export const useHistory = () => useStore(historyStore)

cacheDrawingLocal(drawingStore)

export function useEditor() {
  const [drawing, setDrawing] = useDrawing()
  const [toolbox, setToolbox] = useToolbox()
  const [history, setHistory] = useHistory()

  // useEffect(() => {
  //   console.log(
  //     drawing
  //   )
  // }, [drawing])

  function setDrawingUndoable(newDrawing: Drawing) {
    setHistory(it => it.pushed(drawing))
    setDrawing(newDrawing)
  }

  const commands = {
    activateTool(tool: ToolType) {
      setToolbox(it => it.withActiveTool(tool))
    },

    pickBrush(brush: Glyph) {
      setToolbox(it => it.withBrush(brush))
    },

    applyTool(position: GridPosition) {
      setDrawingUndoable(toolbox.activeTool.apply(drawing, position))
    },

    loadDrawing(drawing: Drawing) {
      setDrawing(drawing)
    },

    undo() {
      const [newHistory, popped] = history.popped()
      if (popped) {
        setDrawing(popped)
        setHistory(newHistory)
      }
    },

    clear() {
      setDrawingUndoable(Drawing.createEmpty(minDrawingSize))
    },

    async copyToClipboard() {
      // browser dependencies should be injectable
      await navigator.clipboard.writeText(drawing.toString(true))
      notifier.success('copied')
    }
  }

  return {
    drawing,
    toolbox,
    ...commands
  }
}
