import { useEditorStoreProvider } from '../../domain/Editor/EditorStore';
import { DrawingGrid } from './DrawingGrid';
import React, { useEffect } from 'react';
import { fromString, getDrawingSize } from '../../domain/Editor/Drawing';
import { px, viewWidth } from 'csx'
import { stylesheet } from 'typestyle';

export function EditorNew() {
  const { editorStore, Provider } = useEditorStoreProvider()
  const { drawing } = editorStore.canvasStore

  useEffect(() => {
    editorStore.canvasStore.setDrawing(fromString(defaultDrawing))
  }, [])

  const cellSize = viewWidth(90 / getDrawingSize(drawing).columns) as string

  return <Provider>
    <div className={css.editor}>
      <DrawingGrid />
      <div>other stuff</div>

    </div>
  </Provider>
}

const css = stylesheet({
  editor: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
  }
})

const defaultDrawing = `☀️🌫👍🏿
🌫🌧🌈
🌧🌈💰`
