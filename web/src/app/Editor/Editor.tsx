import React from 'react'
import { stylesheet, style } from 'typestyle'
import csstips from 'csstips'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faCopy, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons'

import { useNewEditorStore, EditorContext } from '../../domain/Editor/EditorStore'
import { DrawingGrid } from './DrawingGrid'
import { TileButton } from '../elements/TileButton'
import EditableChar from './EditableChar'
import { spaces } from '../../common/theme'
import { ControlsBar, GlyphList } from '../elements/containers'
import { GlyphOption } from '../elements/controls'
import type { PaintbrushTool } from '../../domain/Editor/CanvasStore'

export function Editor() {
  const editorStore = useNewEditorStore()
  const { canvasStore } = editorStore
  const showRecent = canvasStore.recent.filter(it =>
    it !== (canvasStore.tools.paint as PaintbrushTool).brush
  )
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
                  onChange={canvasStore.pickBrush}
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

        <GlyphList>
          {
            showRecent.map(brush =>
              <GlyphOption
                key={brush}
                onClick={() => canvasStore.pickBrush(brush)}
              >
                {brush}
              </GlyphOption>
            )
          }
        </GlyphList>

      </div>
      <div className={css.commandButtons}>
        <TileButton
          onClick={() => editorStore.copyToClipboard()}
        >
          <FontAwesomeIcon icon={faCopy} />
        </TileButton>

        <TileButton
          onClick={() => canvasStore.undo()}
        >
          <FontAwesomeIcon icon={faUndo} />
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
