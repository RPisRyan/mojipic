import { Drawing, DrawingSettings, Glyph, Toolbox, ToolType } from '../../lib/emoji-drawing'
import { Size, GridPosition, GridBounds } from '../../lib/2d'
import { Store, useStore } from '../../lib/reactives'
import { notify as notifier } from './notification'
import { persistDrawing } from './persistDrawing'
import { Stack } from '../../lib/immutable-objects'
import log from 'loglevel'
import { useEffect } from 'react'
import { persistRecentBrushes } from './persistRecentBrushes'

export const drawingSettings: DrawingSettings = {
  minSize: new Size(3, 3),
  maxSize: new Size(12, 8)
}
const undoStackLimit = 20

const defaultDrawing = Drawing.fromString(` 🌈 \n🌈⭐️✨\n 🌈 `)

export const drawingStore = Store(defaultDrawing)
export const useDrawing = () => useStore(drawingStore)

export const toolboxStore = Store(Toolbox.default)
export const useToolbox = () => useStore(toolboxStore)

export const historyStore = Store(new Stack<Drawing>([], undoStackLimit))
export const useHistory = () => useStore(historyStore)

persistDrawing(drawingStore, toolboxStore)
persistRecentBrushes(toolboxStore)

export function useEditor() {
  const [drawing, setDrawing] = useDrawing()
  const [toolbox, setToolbox] = useToolbox()
  const [history, setHistory] = useHistory()

  useEffect(() => {
    log.debug(drawing.toString())
  }, [drawing])

  function setDrawingUndoable(newDrawing: Drawing) {
    setHistory(it => it.pushed(drawing))
    setDrawing(newDrawing)
  }

  const commands = {
    activateTool(tool: ToolType) {
      if (tool !== toolbox.activeToolType) {
        setToolbox(it => it.withActiveTool(tool))
      }
    },

    pickBrush(brush: Glyph) {
      setToolbox(it => it.withBrush(brush))
    },

    applyTool(position: GridPosition) {
      setDrawingUndoable(toolbox.activeTool.apply(drawing, position, drawingSettings))
    },

    loadDrawing(drawing: Drawing) {
      setDrawing(drawing)
      setToolbox(toolbox.withRecent(drawing.uniqueGlyphs()))
    },

    undo() {
      const [newHistory, popped] = history.popped()
      if (popped) {
        setDrawing(popped)
        setHistory(newHistory)
      }
    },

    clear() {
      setDrawingUndoable(
        Drawing.createEmpty(GridBounds.fromSize(drawingSettings.minSize)))
    },

    async copyToClipboard() {
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
