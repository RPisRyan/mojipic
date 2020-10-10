import type { Glyph } from '../canvas/drawing'

const defaultBrush = '👍'

export type PaintbrushTool = { type: 'paint'; brush: Glyph }
export type EraserTool = { type: 'eraser' }

export type Tool = PaintbrushTool | EraserTool
export type ToolType = Tool['type']
export type ToolLookup = { [K in ToolType]: Extract<Tool, { type: K }> }

export type ToolboxState = {
  tools: { [key in Tool['type']]: Tool },
  activeToolType: Tool['type'],
  recent: Glyph[]
}

export function initialToolboxState(): ToolboxState {
  return {
    tools: {
      paint: { type: 'paint', brush: defaultBrush },
      eraser: { type: 'eraser' },
    },
    activeToolType: 'paint',
    recent: [defaultBrush]
  }
}
