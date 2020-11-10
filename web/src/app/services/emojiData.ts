import { getEmojiDataFromNative } from 'emoji-mart'
import { getEmojiData } from '../../lib/emoji'

export const emojiData = getEmojiData('11.0')

export function lookupEmoji(glyph: string) {
  return getEmojiDataFromNative(glyph, 'apple', emojiData)
}


// import { store } from 'emoji-mart'
// import { toolboxStore } from './editorState'

// store.setHandlers({
//   getter: (key) => {
//     console.log('getter', key)
//     switch (key) {
//       case 'frequently': return Object.fromEntries(toolboxStore.getState().recentIds().map(id => [id, 1]))
//       default: return null
//     }
//   },

//   setter: (key, value) => {
//     console.log('setter', key, value)
//     // Persist in your own storage (can be async)
//   }
// })
