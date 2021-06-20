import { Drawing } from '../../lib/emoji-drawing'
import { atom } from 'recoil'
import { persistDrawingEffect } from './persistDrawingEffect'
import { consoleServicesEffect } from './globalServices'

const defaultDrawing = Drawing.fromString(` 🌈 \n🌈⭐️✨\n 🌈 `)

export const drawingAtom = atom({
  key: 'drawing',
  default: defaultDrawing,
  effects_UNSTABLE: [
    persistDrawingEffect,
    consoleServicesEffect
  ]
})
