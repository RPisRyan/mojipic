import React from 'react'
import csstips from 'csstips'
import { cssRaw } from 'typestyle'
import { drawingFromString, padDrawing } from '../domain/drawing'
import EditorScreen from './Editor/EditorScreen'
import { useMaintainDrawingLocalCache } from './useMaintainDrawingLocalCache'
import { mountTheme } from '../common/theme'
import { maxDrawingBounds } from './model/canvasState'

csstips.normalize()
csstips.setupPage('#root')

cssRaw(`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jaldi:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
`)

mountTheme()

export function App() {
  useMaintainDrawingLocalCache(
    padDrawing(
      drawingFromString(defaultDrawing), maxDrawingBounds)
  )
  return <EditorScreen />
}

const defaultDrawing = `☀️🌫👍🏿
🌫🌧🌈
🌧🌈💰`
