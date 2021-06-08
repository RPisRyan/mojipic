import React from 'react'

import { extend } from 'typestyle'
import { LogoText } from '../elements/LogoText'
import { HelpButton } from '../elements/HelpButton'
import { Greeting } from '../Help/Greeting'
import { DrawingSvg } from './DrawingSvg'
import { EditorControls } from './EditorControls'
import { EmojiPicker } from './EmojiPicker'
import { fullScreenStyle, makeCss } from '../../../lib/typestyle-ext'
import { colors, palette, spaces } from '../../services/theme'

export default function EditorScreen() {
  return (
    <div className={css.editorScreen}>
      <div className={css.title}>
        <LogoText>Mojipic</LogoText>
      </div>

      <div className={css.help}>
        <HelpButton/>
      </div>

      <div className={css.drawing}>
        <DrawingSvg/>
      </div>

      <div className={css.controls}>
        <EditorControls/>
      </div>

      <div className={css.brushes}>
        <EmojiPicker/>
      </div>

      <Greeting/>
    </div>
  )
}

const css = makeCss({
  editorScreen: extend(fullScreenStyle, {
    padding: spaces.sm,
    display: 'grid',
    gridTemplateAreas: `"title help" "drawing controls" "brushes brushes"`,
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: '1em 1fr auto',
    gap: spaces.sm,
    background: palette.warm.luminance(0.92).hex(),
  }),
  title: {},
  help: {
    justifySelf: 'center',
    color: colors.darkest,
    cursor: 'pointer',
  },
  drawing: {
    minWidth: 0,
    minHeight: 0,
  },
  controls: {},
  brushes: {},
})
