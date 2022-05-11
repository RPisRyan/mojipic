import { faCopy, faEraser, faPlusSquare, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { classes, stylesheet } from 'typestyle'
import type { StylableElementProps } from '../../../lib/react'
import { spaces, useCopyToClipboard, useEditor } from '../../services'
import { ControlDivider, HelpButton, TileButton } from '../elements'
import EditableChar from './EditableChar'

export function EditorControls({ className, style }: StylableElementProps) {
  const { toolbox, activateTool, pickBrush, undo, clear } = useEditor()
  const { copyToClipboard } = useCopyToClipboard()

  return (
    <div className={classes(css.commandButtons, className)} style={style}>
      <TileButton title="Copy to clipboard" onClick={copyToClipboard}>
        <FontAwesomeIcon icon={faCopy} />
      </TileButton>

      <TileButton title="Undo" onClick={() => undo()}>
        <FontAwesomeIcon icon={faUndo} />
      </TileButton>

      <TileButton title="Clear" onClick={clear}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </TileButton>

      <ControlDivider direction="horizontal" />

      <TileButton
        title="Paintbrush"
        active={toolbox.activeToolType === 'paintbrush'}
        onClick={() => activateTool('paintbrush')}
      >
        {toolbox.activeToolType === 'paintbrush' ? (
          <EditableChar value={toolbox.brush} onChange={(char) => pickBrush(char)} />
        ) : (
          <span>{toolbox.brush}</span>
        )}
      </TileButton>

      <TileButton
        title="Eraser"
        active={toolbox.activeToolType === 'eraser'}
        onClick={() => activateTool('eraser')}
      >
        <FontAwesomeIcon icon={faEraser} />
      </TileButton>

      <ControlDivider direction={'horizontal'} />

      <TileButton>
        <HelpButton />
      </TileButton>
    </div>
  )
}

const css = stylesheet({
  commandButtons: {
    display: 'grid',
    gridAutoRows: 'min-content',
    gap: spaces.sm,
  },
})
