import { Eraser, Paintbrush, ToolType } from './tools'
import type { Glyph } from './glyph'

const defaultTools = {
  paintbrush: new Paintbrush('⭐️'),
  eraser: new Eraser(),
}

type ToolboxData = {
  tools: typeof defaultTools
  activeToolType: ToolType
}

export class Toolbox {
  static default = new Toolbox({
    tools: defaultTools,
    activeToolType: 'paintbrush',
  })

  private constructor(private data: ToolboxData) {
  }

  get tools() {
    return this.data.tools
  }

  get activeToolType() {
    return this.data.activeToolType
  }

  get activeTool() {
    return this.data.tools[this.data.activeToolType]
  }

  get brush() {
    return this.tools.paintbrush.brush
  }

  withData(data: Partial<ToolboxData>) {
    return new Toolbox({ ...this.data, ...data })
  }

  withBrush(brush: Glyph) {
    return this.withData({
      tools: {
        ...this.tools,
        paintbrush: this.tools.paintbrush.withBrush(brush),
      },
    })
  }

  withActiveTool(type: ToolType) {
    return this.withData({
      activeToolType: type,
    })
  }
}
