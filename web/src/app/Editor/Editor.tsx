import React, { useEffect } from 'react'
import { stylesheet, style } from 'typestyle'
import * as csstips from 'csstips'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons'

import { fromString } from '../../domain/Editor/Drawing'
import { useNewEditorStore, EditorContext } from '../../domain/Editor/EditorStore'
import { DrawingGrid } from './DrawingGrid'
import { TileButton } from '../elements/TileButton'
import { ControlsBar } from '../elements'
import EditableChar from './EditableChar'
import { sizes, spaces } from '../../common/theme'

export function Editor() {
  const editorStore = useNewEditorStore()
  const { canvasStore } = editorStore

  useEffect(() => {
    editorStore.canvasStore.setDrawing(fromString(defaultDrawing))
  }, [])

  return <EditorContext.Provider value={editorStore}>
    <div className={css.editor}>
      <div className={style(csstips.vertical)} >
        <DrawingGrid />

        <ControlsBar>
          <TileButton
            active={canvasStore.activeToolType === 'paint'}
            onClick={() => canvasStore.activateTool('paint')}
          >
            {
              canvasStore.activeToolType === 'paint'
                ? <EditableChar
                  value={canvasStore.brush}
                  onChange={canvasStore.setBrush}
                />
                : <span>{canvasStore.brush}</span>
            }
          </TileButton>

          <TileButton
            active={canvasStore.activeToolType === 'eraser'}
            onClick={() => canvasStore.activateTool('eraser')}
          >
            <FontAwesomeIcon icon={faEraser} />
          </TileButton>
        </ControlsBar>

      </div>
      <div className={css.commandButtons}>
        <TileButton
          onClick={() => editorStore.copyToClipboard()}
        >
          <FontAwesomeIcon icon={faCopy} />
        </TileButton>

        <TileButton
          onClick={() => canvasStore.clear()}
        >
          <FontAwesomeIcon icon={faTrash} />
        </TileButton>
      </div>

    </div>
  </EditorContext.Provider>
}

const css = stylesheet({
  editor: {
    display: 'grid',
    gridTemplateColumns: 'auto min-content',
    gap: spaces.sm
  },
  commandButtons: {
    ...csstips.vertical,
    gap: spaces.sm
  }
})

const defaultDrawing = `☀️🌫👍🏿
🌫🌧🌈
🌧🌈💰`
