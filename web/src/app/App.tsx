import React from 'react'
import csstips from 'csstips'
import { cssRaw } from 'typestyle'
import { drawingFromString } from '../domain/editor/canvas/drawing'
import EditorScreen from './Editor/EditorScreen'
import { useMaintainDrawingLocalCache } from './useMaintainDrawingLocalCache'

csstips.normalize()
csstips.setupPage('#root')
// mountTheme()

cssRaw(`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jaldi:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
`)

export function App() {
  useMaintainDrawingLocalCache(drawingFromString(defaultDrawing))
  return <EditorScreen />
}

const defaultDrawing = `☀️🌫👍🏿
🌫🌧🌈
🌧🌈💰`
