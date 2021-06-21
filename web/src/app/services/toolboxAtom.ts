import { Toolbox } from '../../lib/emoji-drawing'
import { atom } from 'recoil'

export const toolboxAtom = atom({
  key: 'toolbox',
  default: Toolbox.default,
})
