import { loadDrawingAction } from './drawingActions'
import type { AtomEffect } from 'recoil'
import type { Drawing } from '../../lib/emoji-drawing'

export const consoleServicesEffect: AtomEffect<Drawing> = ({ setSelf }) => {
  const loadDrawing = loadDrawingAction(setSelf);
  const untypedWindow = window as any
  untypedWindow.Mojipic = {
    loadDrawing,
  }
}
