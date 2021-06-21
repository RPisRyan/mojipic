import { Stack } from '../../lib/immutable-objects'
import { atom } from 'recoil'
import type { Drawing } from '../../lib/emoji-drawing'

const undoStackLimit = 20

export const historyAtom = atom({
  key: 'history',
  default: new Stack<Drawing>([], undoStackLimit)
})
