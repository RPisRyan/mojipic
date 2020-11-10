import { getEmojiDataFromNative } from 'emoji-mart'
import { getEmojiData } from '../../lib/emoji'

export const emojiData = getEmojiData('11.0')

export function lookupEmoji(glyph: string) {
  return getEmojiDataFromNative(glyph, 'apple', emojiData)
}
