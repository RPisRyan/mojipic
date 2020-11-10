import { OrderedSet } from 'immutable'
import { lookupEmoji } from '../../app/services/emojiData'
import { Glyph } from './glyph'
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

export class Toolbox {

  private constructor(private data: ToolboxData) { }

  static default = new Toolbox({
    tools: defaultTools,
    activeToolType: 'paintbrush',
    recent: OrderedSet([defaultTools.paintbrush.brush])
  })

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

  get recent() {
    return this.data.recent.reverse().toArray()
  }

  recentIds() {
    return this.recent.map(
      glyph => !Glyph.isEmpty(glyph) && lookupEmoji(glyph!)?.id)
      .filter(it => it) as string[]
  }

  withData(data: Partial<ToolboxData>) {
    return new Toolbox(
      { ...this.data, ...data }
    )
  }

  withBrush(brush: Glyph) {
    return this.withData({
      recent: this.data.recent.add(brush),
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
      recent: this.data.recent.merge(brushes)
    })
  }
}
