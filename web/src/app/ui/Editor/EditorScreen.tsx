import React from 'react'

import { extend } from 'typestyle'
import { LogoText } from '../elements'
import { Greeting } from '../Help/Greeting'
import { DrawingSvg } from './DrawingSvg'
import { EditorControls } from './EditorControls'
import { EmojiPicker } from './EmojiPicker'
import { fullScreenStyle, makeCss } from '../../../lib/typestyle-ext'
import { colors, palette, spaces } from '../../services'

export default function EditorScreen() {
  return (
    <div className={css.editorScreen}>
      <div className={css.editorFrame}>
        <div className={css.top}>
          <LogoText>Mojipic</LogoText>

        </div>

        <div className={css.middle}>

          <DrawingSvg />

          <EditorControls />
        </div>

        <div className={css.bottom}>
          <EmojiPicker />

        </div>

        <Greeting />
      </div>
    </div>
  )
}

const css = makeCss({
  editorScreen: extend(
    fullScreenStyle,
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: palette.warm.luminance(0.92).hex(),
      padding: spaces.sm
    }),
  editorFrame: {
    display: 'flex',
    maxWidth: '800px',
    flexDirection: 'column',
    gap: '0.5rem',

  },
  top: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  middle: {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem'
  },
  bottom: {
    justifySelf: 'flex-end'
  },
  help: {
    justifySelf: 'center',
    color: colors.darkest,
    cursor: 'pointer',
  },
})
