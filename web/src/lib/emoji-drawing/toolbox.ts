import { OrderedSet } from 'immutable'
import type { Glyph } from './glyph'
import { Paintbrush, Eraser, ToolType } from './tools'

const defaultTools = {
  paintbrush: new Paintbrush('⭐️'),
  eraser: new Eraser()
}

type ToolboxData = {
  tools: typeof defaultTools
  activeToolType: ToolType
  recent: OrderedSet<Glyph>
}

export class Toolbox implements ToolboxData {
  public readonly tools: typeof defaultTools
  public readonly activeToolType: ToolType
  public readonly recent: OrderedSet<Glyph>

  private constructor({ tools, activeToolType, recent }: ToolboxData) {
    this.tools = tools
    this.activeToolType = activeToolType
    this.recent = recent
  }

  static default = new Toolbox({
    tools: defaultTools,
    activeToolType: 'paintbrush',
    recent: OrderedSet<Glyph>([defaultTools.paintbrush.brush])
  })

  get activeTool() {
    return this.tools[this.activeToolType]
  }

  get brush() {
    return this.tools.paintbrush.brush
  }

  withData(data: Partial<ToolboxData>) {
    return new Toolbox(
      { ...this, ...data }
    )
  }

  withBrush(brush: Glyph) {
    return this.withData({
      recent: this.recent.add(brush),
      tools: {
        ...this.tools,
        paintbrush: this.tools.paintbrush.withBrush(brush)
      }
    })
  }

  withActiveTool(type: ToolType) {
    return this.withData({
      activeToolType: type
    })
  }

  withRecent(brushes: Glyph[]) {
    return this.withData({
      recent: this.recent.merge(brushes)
    })
  }
}
