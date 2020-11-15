import React, { useEffect } from 'react'
import { stylesheet } from 'typestyle'

import { spaces } from '../../services/theme'
import { DrawingSvg } from './DrawingSvg'
import { EmojiPicker } from './EmojiPicker'
import { Greeting } from '../Help/Greeting'
import { analytics } from '../../services/firebase'
import { EditorControls } from './EditorControls'

export function Editor() {

  useEffect(() => {
    analytics.logEvent('screen_view', {
      app_name: 'mojipic',
      screen_name: 'editor'
    })
  }, [])

  return <div className={css.editor}>

    <div className={css.canvas}>

      <DrawingSvg className={css.drawing} />

      <EditorControls className={css.controls} />

      <EmojiPicker className={css.brushes} />

    </div>

    <Greeting />

  </div >
}

const css = stylesheet({
  editor: {

  },
  canvas: {
    display: 'grid',
    gridTemplateAreas: `"drawing controls" "brushes brushes"`,
    gridTemplateRows: '1fr auto',
    gridTemplateColumns: '1fr auto',
    gap: spaces.sm
  },
  drawing: {
    gridArea: 'drawing'
  },
  controls: {
    gridArea: 'controls'
  },
  brushes: {
    gridArea: 'brushes'
  }
})
