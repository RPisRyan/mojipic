import React, { useMemo } from 'react'
import { NimblePicker, BaseEmoji, Emoji } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import { em, percent } from 'csx'
import { classes, stylesheet } from 'typestyle'
import { useEditor } from '../../services/editorState'
import { emojiData, lookupEmoji } from '../../services/emojiData'
import { Glyph } from '../../../lib/emoji-drawing'
import type { StylableElementProps } from '../../../lib/react'

export function EmojiPicker({ className, style }: StylableElementProps) {
  const { toolbox, pickBrush } = useEditor()

  const recent = useMemo(() => {
    const recent = toolbox.recent
      .map((glyph) => !Glyph.isEmpty(glyph) && lookupEmoji(glyph!)?.id)
      .filter((it) => it) as string[]
    return recent
  }, [toolbox.recent])

  return (
    <div className={classes(css.emojiPicker, className)} style={style}>
      <NimblePicker
        enableFrequentEmojiSort={true}
        data={emojiData}
        recent={recent && recent.length > 0 ? recent : undefined}
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
