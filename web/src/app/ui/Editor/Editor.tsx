import React from 'react'
import { stylesheet } from 'typestyle'
import csstips from 'csstips'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faCopy, faTrash, faUndo, faPlusCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import { TileButton } from '../elements/TileButton'
import EditableChar from './EditableChar'
import { useEditor } from '../../services/editorState'
import { spaces } from '../../services/theme'
import { DrawingSvg } from './DrawingSvg'
import { EmojiPicker } from './EmojiPicker'
import { ControlDivider } from '../elements/ControlDivider'
import { percent } from 'csx'
import { Greeting } from '../Help/Greeting'

export function Editor() {
  const {
    toolbox,
    activateTool,
    pickBrush,
    copyToClipboard,
    undo,
    clear
  } = useEditor()

  return <div className={css.editor}>

    <div className={css.canvas} >
      <DrawingSvg />

      <EmojiPicker />
    </div>

    <div className={css.commandButtons}>
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

    <Greeting />

  </div >
}

const css = stylesheet({
  editor: {
    display: 'grid',
    gridTemplateColumns: 'auto min-content',
    gap: spaces.sm
  },
  canvas: {
    maxHeight: percent(100)
  },
  commandButtons: {
    ...csstips.vertical,
    gap: spaces.sm
  },
})
