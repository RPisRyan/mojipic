import { useEffect } from 'react'
import { loadLocal, saveLocal } from '../storage'
import type { GlyphArray } from '../../domain/drawing/drawingFunctions'
import { useEditor } from './useEditor'

export function useMaintainDrawingLocalCache(defaultDrawing: GlyphArray) {
  const { canvas, loadDrawing } = useEditor()

  useEffect(() => {
    loadDrawing(loadLocal() || defaultDrawing)
  }, [])

  useEffect(() => {
    saveLocal(canvas.drawing)
  }, [canvas.drawing])
}
