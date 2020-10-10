import { useEffect } from 'react'
import { Drawing, uniqueGlyphs } from '../domain/editor/canvas/drawing'
import { loadLocal, saveLocal } from '../common/storage'
import { havingDrawing } from '../domain/editor/canvas/canvasUpdates'
import { withRecent } from '../domain/editor/toolbox/toolboxUpdates'
import { updateCanvas, updateToolbox, useCanvasState } from '../domain/globalState'

export function useMaintainDrawingLocalCache(defaultDrawing: Drawing) {
  const canvas = useCanvasState()

  useEffect(() => {
    const drawing = loadLocal() || defaultDrawing
    updateCanvas(
      havingDrawing(drawing)
    )
    updateToolbox(
      withRecent(uniqueGlyphs(drawing))
    )
  }, [])

  useEffect(() => {
    saveLocal(canvas.drawing)
  }, [canvas.drawing])
}
