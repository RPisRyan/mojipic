import React from 'react'
import { NimblePicker, BaseEmoji } from 'emoji-mart'
import { getEmojiData } from '../../../lib/emoji'
import 'emoji-mart/css/emoji-mart.css'
import { percent } from 'csx'
import { stylesheet } from 'typestyle'
import { useEditor } from '../../services/editorState'

const emojiData = getEmojiData('11.0')

export function EmojiPicker() {
  const { pickBrush } = useEditor()
  return <div className={css.emojiPicker}>
    <NimblePicker
      data={emojiData || []}
      title={''}
      emojiSize={32}
      showPreview={true}
      showSkinTones={true}
      style={{
        width: percent(100),
        // maxHeight: percent(100)
      }}
      onSelect={(emoji: BaseEmoji) => pickBrush(emoji.native)}
    />
  </div>
}

const css = stylesheet({
  emojiPicker: {
    $nest: {
      '.emoji-mart-bar': {
        display: 'none'
      }
    }
  }
})
