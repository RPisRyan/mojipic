import React, { useEffect, useReducer } from 'react'
import { viewWidth } from 'csx'
import { stylesheet, style } from 'typestyle'
import * as csstips from 'csstips'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faEraser } from '@fortawesome/free-solid-svg-icons'

import { fromString, getDrawingSize } from '../../domain/Editor/Drawing'
import { useNewEditorStore, EditorContext } from '../../domain/Editor/EditorStore'
import { DrawingGrid } from './DrawingGrid'
import { TileButton } from '../elements/TileButton'
import { ControlsBar } from '../elements'
import { useNewCanvasStore } from '../../domain/Editor/CanvasStore'

export function EditorNew() {
  // const { editorStore, Provider } = useEditorStoreProvider()

  const editorStore = useNewEditorStore()

  const { canvasStore } = editorStore
  const { drawing } = canvasStore

  useEffect(() => {
    editorStore.canvasStore.setDrawing(fromString(defaultDrawing))
  }, [])

  const cellSize = viewWidth(90 / getDrawingSize(drawing).columns) as string

  return <EditorContext.Provider value={editorStore}>
    <div className={css.editor}>
      <div className={style(csstips.vertical)} >
        <DrawingGrid />

        <ControlsBar>
          <TileButton
            active={canvasStore.tool.type === 'paint'}
            onClick={() => editorStore.canvasStore.pickTool({ type: 'paint', brush: '😡' })}
          >
            {
              (canvasStore.tool.type === 'paint' && canvasStore.tool.brush)
                ? <span>{canvasStore.tool.brush}</span>
                : <FontAwesomeIcon icon={faPaintBrush} />
            }
          </TileButton>

          <TileButton
            active={canvasStore.tool.type === 'eraser'}
            onClick={() => editorStore.canvasStore.pickTool({ type: 'eraser' })}
          >
            <FontAwesomeIcon icon={faEraser} />
          </TileButton>
        </ControlsBar>

      </div>
      <div>Right Side Text</div>
    </div>
  </EditorContext.Provider>
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
