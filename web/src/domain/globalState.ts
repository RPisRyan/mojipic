import { createGlobalState } from 'react-hooks-global-state'
import { DrawingCanvasState, initialCanvasState } from './editor/canvas/canvasState'
import { initialToolboxState, ToolboxState } from './editor/toolbox/toolboxState'
import { createUpdateState } from '../common/hookedState'
import { initialEditorState } from './editor/editorState'
import { toolboxViews } from './editor/toolbox/toolboxViews'
import { tuple } from '../util/arrayUtil'

const initialState = {
  canvas: initialCanvasState(),
  toolbox: initialToolboxState(),
  editor: initialEditorState()
}

export const { useGlobalState, getGlobalState, setGlobalState }
  = createGlobalState(initialState)

export function resetGlobalState() {
  setGlobalState('canvas', initialState.canvas)
}

export const getToolboxState = () => toolboxViews(getGlobalState('toolbox'))
export const getCanvasState = () => getGlobalState('canvas')
export const getEditorState = () => getGlobalState('editor')

export const updateToolbox = createUpdateState<ToolboxState>(s => setGlobalState('toolbox', s))
export const updateCanvas = createUpdateState<DrawingCanvasState>(s => setGlobalState('canvas', s))
export const updateEditor = createUpdateState<ToolboxState>(s => setGlobalState('toolbox', s))

export const useToolboxState = () => toolboxViews(useGlobalState('toolbox')[0])
export const useCanvasState = () => useGlobalState('canvas')[0]
export const useEditorState = () => useGlobalState('editor')[0]

export function getToolboxStore() {
  const state = getGlobalState('toolbox')
  const $update = createUpdateState<ToolboxState>(s => setGlobalState('toolbox', s))
  return {
    ...toolboxViews(state),
    $update
  }
}

export function getCanvasStore() {
  const state = getGlobalState('canvas')
  const $update = createUpdateState<DrawingCanvasState>(s => setGlobalState('canvas', s))
  return { ...state, $update }
}

export function getEditorStore() {
  const state = getGlobalState('toolbox')
  const $update = createUpdateState<ToolboxState>(s => setGlobalState('toolbox', s))
  return { ...state, $update }
}
