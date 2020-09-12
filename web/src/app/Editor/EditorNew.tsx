import React, { useEffect } from 'react'
import { viewWidth } from 'csx'
import { stylesheet, style } from 'typestyle'
import * as csstips from 'csstips'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faEraser } from '@fortawesome/free-solid-svg-icons'

import { fromString, getDrawingSize } from '../../domain/Editor/Drawing'
import { useEditorStoreProvider } from '../../domain/Editor/EditorStore'
import { DrawingGrid } from './DrawingGrid'
import { TileButton } from '../elements/TileButton'
import { ControlsBar } from '../elements'

export function EditorNew() {
  const { editorStore, Provider } = useEditorStoreProvider()
  const { drawing } = editorStore.canvasStore

  useEffect(() => {
    editorStore.canvasStore.setDrawing(fromString(defaultDrawing))
  }, [])

  const cellSize = viewWidth(90 / getDrawingSize(drawing).columns) as string

  return <Provider>
    <div className={css.editor}>
      <div className={style(csstips.vertical)} >
        <DrawingGrid />

        <ControlsBar>
          <TileButton
            onClick={() => editorStore.canvasStore.pickTool({ type: 'paint', brush: '😡' })} >
            <FontAwesomeIcon icon={faPaintBrush} />
          </TileButton>

          <TileButton
            onClick={() => editorStore.canvasStore.pickTool({ type: 'eraser' })} >
            <FontAwesomeIcon icon={faEraser} />
          </TileButton>
        </ControlsBar>

      </div>
      <div>Right Side Text</div>
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
