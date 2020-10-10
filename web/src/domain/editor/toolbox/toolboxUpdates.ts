import type { Draft } from 'immer'
import type { Glyph } from '../canvas/drawing'
import type { PaintbrushTool, ToolboxState, ToolType } from './toolboxState'

export function withRecent(
  glyphs: Glyph[]
) {
  return (draft: Draft<ToolboxState>) => {
    draft.recent = Array.from(new Set([...glyphs, ...draft.recent]))
  }
}

export function havingActive(
  type: ToolType
) {
  return (draft: Draft<ToolboxState>) => {
    draft.activeToolType = type
  }
}

export function havingBrush(
  brush: Glyph
) {
  return (draft: Draft<ToolboxState>) => {
    (draft.tools.paint as PaintbrushTool).brush = brush
  }
}
