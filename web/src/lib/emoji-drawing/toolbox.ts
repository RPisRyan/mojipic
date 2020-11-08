import produce, { immerable } from 'immer'
import type { GridPosition } from '../2d/gridPosition'
import type { Drawing } from './drawing'
import { Glyph } from './glyph'
import type { DrawingSettings } from './types'

export type ToolType = 'eraser' | 'paintbrush'

export type Tool<T extends ToolType> = {
  readonly type: T,
  apply(drawing: Drawing, position: GridPosition, settings: DrawingSettings): Drawing
}

export class Eraser implements Tool<'eraser'> {
  public readonly type = 'eraser'

  apply(drawing: Drawing, position: GridPosition, settings: DrawingSettings): Drawing {
    const newDrawing = drawing.set([position, Glyph.none])
    return newDrawing.croppedToContent(settings.minSize)
  }
}

export class Paintbrush implements Tool<'paintbrush'> {
  public readonly type = 'paintbrush'

  constructor(public readonly brush: Glyph) { }

  apply(drawing: Drawing, position: GridPosition): Drawing {
    return drawing.set([position, this.brush])
  }

  withBrush(brush: Glyph) {
    return new Paintbrush(brush)
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
      draft.tools.paintbrush = draft.tools.paintbrush.withBrush(brush)
    })
  }

  withActiveTool(type: ToolType) {
    const newValue = produce(this, draft => {
      draft.activeToolType = type
    })
    return newValue
  }
}

