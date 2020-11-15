import { faCopy, faUndo, faPlusSquare, faEraser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { classes, stylesheet } from 'typestyle'
import type { StylableElementProps } from '../../../lib/react'
import { useEditor } from '../../services/editorState'
import { spaces } from '../../services/theme'
import { ControlDivider } from '../elements/ControlDivider'
import { TileButton } from '../elements/TileButton'
import EditableChar from './EditableChar'

export function EditorControls({ className, style }: StylableElementProps) {
  const {
    toolbox,
    activateTool,
    pickBrush,
    copyToClipboard,
    undo,
    clear
  } = useEditor()

  return <div className={classes(css.commandButtons, className)} style={style}>
    <TileButton
      onClick={copyToClipboard}
    >
      <FontAwesomeIcon icon={faCopy} />
    </TileButton>

    <TileButton
      onClick={() => undo()}
    >
      <FontAwesomeIcon icon={faUndo} />
    </TileButton>

    <TileButton
      onClick={clear}
    >
      <FontAwesomeIcon icon={faPlusSquare} />
    </TileButton>

    <ControlDivider direction="horizontal" />

    <TileButton
      active={toolbox.activeToolType === 'paintbrush'}
      onClick={() => activateTool('paintbrush')}
    >
      {
        toolbox.activeToolType === 'paintbrush'
          ? <EditableChar
            value={toolbox.brush}
            onChange={char => pickBrush(char)}
          />
          : <span>{toolbox.brush}</span>
      }
    </TileButton>

    <TileButton
      active={toolbox.activeToolType === 'eraser'}
      onClick={() => activateTool('eraser')}
    >
      <FontAwesomeIcon icon={faEraser} />
    </TileButton>

  </div>
}

const css = stylesheet({
  commandButtons: {
    display: 'grid',
    gridAutoRows: 'min-content',
    gap: spaces.sm
  },
})
