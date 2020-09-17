import {
  useReducer, createContext,
  useContext, Dispatch, useEffect
} from 'react'
import { useNewCanvasStore, CanvasStore } from './CanvasStore'
import { drawingFromString, drawingToString } from './Drawing'
import { notify } from '../../common/notification'
import { loadLocal, saveLocal } from '../../common/storage'

const defaultDrawing = `☀️🌫👍🏿
🌫🌧🌈
🌧🌈💰`

export type EditorState = {
  saved: boolean
}

type EditorAction =
  { action: 'didSave' }

function emptyEditorState(): EditorState {
  return {
    saved: false
  }
}

function reduce(state: EditorState, action: EditorAction): EditorState {
  switch (action.action) {
    case 'didSave':
      return {
        ...state,
        saved: true
      }
  }
}

function createEditorStore(
  editorState: EditorState,
  dispatch: Dispatch<EditorAction>,
  canvasStore: CanvasStore
) {
  return {
    ...editorState,
    canvasStore,
    async save() {
      dispatch({ action: 'didSave' })
    },
    async copyToClipboard() {
      const serialized = drawingToString(canvasStore.drawing)
      await navigator.clipboard.writeText(serialized)
      notify.success('copied')
    }
  }
}

/**
 * EditorStore is the API provided for components to use.
 */
export type EditorStore = ReturnType<typeof createEditorStore>

export const EditorContext = createContext<EditorStore>(undefined as unknown as EditorStore)

export function useNewEditorStore() {
  const canvas = useNewCanvasStore()
  const [editorState, editorDispatch] = useReducer(reduce, emptyEditorState())

  useEffect(() => {
    const loaded = loadLocal()
    if (loaded) {
      canvas.setDrawing(loaded)
    } else {
      canvas.setDrawing(drawingFromString(defaultDrawing))
    }
  }, [])

  useEffect(() => {
    saveLocal(canvas.drawing)
  }, [canvas.drawing])

  return createEditorStore(editorState, editorDispatch, canvas)
}

export function useEditorStore() {
  return useContext(EditorContext)
}
