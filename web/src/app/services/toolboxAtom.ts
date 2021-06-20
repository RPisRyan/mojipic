import { Toolbox } from '../../lib/emoji-drawing'
import { atom } from 'recoil'
import { persistBrushesEffect } from './persistBrushesEffect'

export const toolboxAtom = atom({
  key: 'toolbox',
  default: Toolbox.default,
  effects_UNSTABLE: [
    persistBrushesEffect
  ]
})
