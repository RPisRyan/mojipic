import produce, { immerable } from 'immer'
import type { Point } from '../2d/point'
import type { Drawing } from './drawing'
import { Glyph } from './glyph'

export type ToolType = 'eraser' | 'paintbrush'

export type Tool<T extends ToolType> = {
  readonly type: T,
  apply(drawing: Drawing, position: Point): Drawing
}

export class Eraser implements Tool<'eraser'> {
  public readonly type = 'eraser'

  apply(drawing: Drawing, position: Point): Drawing {
    return drawing.setCell([position, Glyph.none])
  }
}

export class Paintbrush implements Tool<'paintbrush'> {
  public readonly type = 'paintbrush'

  constructor(public readonly brush: Glyph) { }

  apply(drawing: Drawing, position: Point): Drawing {
    return drawing.setCell([position, this.brush])
  }
}

const defaultTools = {
  paintbrush: new Paintbrush('⭐️'),
  eraser: new Eraser()
}

export class Toolbox {
  [immerable] = true

  private constructor(
    readonly tools: typeof defaultTools,
    readonly activeToolType: ToolType,
    readonly recent: Glyph[]
  ) { }

  static default = new Toolbox(defaultTools, 'paintbrush', [])

  get activeTool() {
    return this.tools[this.activeToolType]
  }

  get brush() {
    return this.tools.paintbrush.brush
  }

  withBrush(brush: Glyph) {
    return produce(this, draft => {
      draft.tools.paintbrush.brush = brush
    })
  }

  withActiveTool(type: ToolType) {
    const newValue = produce(this, draft => {
      draft.activeToolType = type
    })
    return newValue
  }
}

