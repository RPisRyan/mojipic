import { Drawing, DrawingSettings, Glyph, ToolType } from '../../lib/emoji-drawing'
import { GridBounds, GridPosition, Size } from '../../lib/2d'
import log from 'loglevel'
import { useEffect } from 'react'
import { analytics } from './firebase'
import { drawingAtom } from './drawingAtom'
import { useRecoilState } from 'recoil'
import { toolboxAtom } from './toolboxAtom'
import { historyAtom } from './historyState'

export const drawingSettings: DrawingSettings = {
  minSize: new Size(3, 3),
  maxSize: new Size(16, 12),
}

export function useEditor() {
  const [drawing, setDrawing] = useRecoilState(drawingAtom)
  const [toolbox, setToolbox] = useRecoilState(toolboxAtom)
  const [history, setHistory] = useRecoilState(historyAtom)

  useEffect(() => {
    log.debug(drawing.toString())
  }, [drawing])

  function setDrawingUndoable(newDrawing: Drawing) {
    setHistory((it) => it.pushed(drawing))
    setDrawing(newDrawing)
  }

  const commands = {
    activateTool(tool: ToolType) {
      if (tool !== toolbox.activeToolType) {
        setToolbox((it) => it.withActiveTool(tool))
      }
    },

    pickBrush(brush: Glyph) {
      setToolbox((it) => it.withActiveTool('paintbrush').withBrush(brush))
      analytics.logEvent('select_content', {
        content_type: 'emoji',
        item_id: brush || '',
      })
    },

    applyTool(position: GridPosition) {
      setDrawingUndoable(toolbox.activeTool.apply(drawing, position, drawingSettings))
    },

    undo() {
      const [newHistory, popped] = history.popped()
      if (popped) {
        setDrawing(popped)
        setHistory(newHistory)
      }
    },

    clear() {
      setDrawingUndoable(Drawing.createEmpty(GridBounds.fromSize(drawingSettings.minSize)))
      analytics.logEvent('select_content', {
        content_type: 'drawing',
        item_id: 'NEW',
      })
    },
  }

  return {
    drawing,
    toolbox,
    ...commands,
  }
}
