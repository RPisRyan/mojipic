import { faCopy, faEraser, faPlusSquare, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { classes, stylesheet } from 'typestyle'
import type { StylableElementProps } from '../../../lib/react'
import { spaces, useCopyToClipboard, useEditor } from '../../services'
import { ControlDivider, HelpButton, TileButton } from '../elements'
import EditableChar from './EditableChar'

export function EditorControls({ className, style }: StylableElementProps) {
  const { toolbox, activateTool, pickBrush, undo, clear, backgroundGlyph, setBackgroundGlyph } = useEditor()
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
        title="Paintbrush: Select emoji brush below, or click me to type in a emoji/character"
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
        title="Background: Set background to the currently selected brush"
        onClick={() => setBackgroundGlyph(toolbox.brush)}
      >
        <span>{backgroundGlyph}</span>
      </TileButton>

      <TileButton
        title="Eraser"
        active={toolbox.activeToolType === 'eraser'}
        onClick={() => activateTool('eraser')}
      >
        <div><FontAwesomeIcon icon={faEraser} /></div>
      </TileButton>

      {/* <ControlDivider direction={'horizontal'} />

      <TileButton title={'Help'} >
        <HelpButton />
      </TileButton> */}
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
