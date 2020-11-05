import React from 'react'
import { stylesheet, style } from 'typestyle'
import csstips from 'csstips'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faCopy, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons'

import { TileButton } from '../elements/TileButton'
import EditableChar from './EditableChar'
import { ControlsBar, GlyphList } from '../elements/containers'
import { GlyphOption } from '../elements/controls'
import { useEditor } from '../../services/editorState'
import { spaces } from '../../services/theme'
import { DrawingSvg } from './DrawingSvg'

export function Editor() {
  const {
    toolbox,
    activateTool,
    pickBrush,
    copyToClipboard,
    clear
  } = useEditor()

  const showRecent = toolbox.recent.filter(it =>
    it !== toolbox.brush
  )
  return <div className={css.editor}>
    <div className={style(csstips.vertical)} >
      <DrawingSvg />

      <ControlsBar>
        {/* <HelpTooltip
          message="Select paintbrush tool"
        > */}
        <TileButton
          active={toolbox.activeToolType === 'paintbrush'}
          onClick={() => activateTool('paintbrush')}
        >
          {
            toolbox.activeToolType === 'paintbrush'
              ? <EditableChar
                value={toolbox.brush}
                onChange={() => activateTool('paintbrush')}
              />
              : <span>{toolbox.brush}</span>
          }
        </TileButton>
        {/* </HelpTooltip> */}

        <TileButton
          active={toolbox.activeToolType === 'eraser'}
          onClick={() => activateTool('eraser')}
        >
          <FontAwesomeIcon icon={faEraser} />
        </TileButton>
      </ControlsBar>

      <GlyphList>
        {
          showRecent.map(brush =>
            <GlyphOption
              key={brush}
              onClick={() => pickBrush(brush)}
            >
              {brush}
            </GlyphOption>
          )
        }
      </GlyphList>

    </div>
    <div className={css.commandButtons}>
      <TileButton
        onClick={copyToClipboard}
      >
        <FontAwesomeIcon icon={faCopy} />
      </TileButton>

      <TileButton
      // onClick={() => undo()}
      >
        <FontAwesomeIcon icon={faUndo} />
      </TileButton>

      <TileButton
        onClick={clear}
      >
        <FontAwesomeIcon icon={faTrash} />
      </TileButton>
    </div>

  </div>
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
