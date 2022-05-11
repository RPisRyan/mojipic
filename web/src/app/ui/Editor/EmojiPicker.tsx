import React from 'react'
import { BaseEmoji, NimblePicker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import { em, percent } from 'csx'
import { emojiData, useEditor } from '../../services'
import type { StylableElementProps } from '../../../lib/react'

export function EmojiPicker({ className, style }: StylableElementProps) {
  const { pickBrush } = useEditor()

  return (
    <NimblePicker
      enableFrequentEmojiSort={true}
      data={emojiData}
      title={''}
      emoji={''}
      showPreview={false}
      skinEmoji="hand"
      style={{
        width: percent(100),
      }}
      onSelect={(emoji: BaseEmoji) => pickBrush(emoji.native)}
    />
  )
}
