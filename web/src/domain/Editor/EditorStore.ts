import React, {
  useReducer, PropsWithChildren, createContext,
  useContext, Dispatch, createElement
} from 'react'
import { useNewCanvasStore, CanvasStore } from './CanvasStore'

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
      // await asyncStuff()
      dispatch({ action: 'didSave' })
    }
  }
}

/**
 * EditorStore is the API provided for components to use.
 */
export type EditorStore = ReturnType<typeof createEditorStore>

const EditorContext = createContext<EditorStore>(undefined as unknown as EditorStore)

/**
 * Create editor store and provider for mounting context.
 */
export function useEditorStoreProvider() {
  const canvas = useNewCanvasStore()
  const [editorState, editorDispatch] = useReducer(reduce, emptyEditorState())
  const editorStore = createEditorStore(editorState, editorDispatch, canvas)
  const Provider = ({ children }: PropsWithChildren<any>) =>
    createElement(
      EditorContext.Provider,
      { value: editorStore },
      children
    )
  return {
    editorStore, Provider
  }
}

export function useEditorStore() {
  return useContext(EditorContext)
}
