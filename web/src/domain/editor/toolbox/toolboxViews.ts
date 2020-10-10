import type { PaintbrushTool, ToolboxState } from './toolboxState'

export function toolboxViews(state: ToolboxState) {
  return {
    ...state,
    get brush() {
      return (state.tools['paint'] as PaintbrushTool).brush
    }
  }
}

export type ToolboxStateWithViews = ReturnType<typeof toolboxViews>
