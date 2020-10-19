import { useEffect } from 'react'
import { loadLocal, saveLocal } from '../common/storage'
import type { Drawing } from '../domain/drawing'
import { useEditor } from './model/useEditor'

export function useMaintainDrawingLocalCache(defaultDrawing: Drawing) {
  const { canvas, loadDrawing } = useEditor()

  useEffect(() => {
    loadDrawing(loadLocal() || defaultDrawing)
  }, [])

  useEffect(() => {
    saveLocal(canvas.drawing)
  }, [canvas.drawing])
}
