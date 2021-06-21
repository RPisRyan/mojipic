import React from 'react'
import { BaseEmoji, NimblePicker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import { em, percent } from 'csx'
import { classes, stylesheet } from 'typestyle'
import { emojiData, useEditor } from '../../services'
import type { StylableElementProps } from '../../../lib/react'

export function EmojiPicker({ className, style }: StylableElementProps) {
  const { pickBrush } = useEditor()

  return (
    <div className={classes(css.emojiPicker, className)} style={style}>
      <NimblePicker
        enableFrequentEmojiSort={true}
        data={emojiData}
        title={''}
        emojiSize={32}
        emoji={''}
        showPreview={false}
        skinEmoji="hand"
        style={{
          width: percent(100),
          height: percent(100),
        }}
        onSelect={(emoji: BaseEmoji) => pickBrush(emoji.native)}
      />
    </div>
  )
}

const css = stylesheet({
  emojiPicker: {
    $nest: {
      '.emoji-mart-bar:first-of-type': {
        display: 'none',
      },
      '.emoji-mart-bar:last-of-type': {
        height: em(3),
      },
      '.emoji-mart-preview': {
        height: em(3),
      },
    },
  },
})
