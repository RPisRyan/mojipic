import { percent, px } from 'csx'
import React from 'react'
import { classes, stylesheet } from 'typestyle'
import type { GridPosition } from '../../../lib/2d'
import type { Tile } from '../../../lib/emoji-drawing'
import type { StylableElementProps } from '../../../lib/react'
import { drawingSettings, useEditor } from '../../services/editorState'
import { colors } from '../../services/theme'

const tileSize = 10
const margin = 1

export function DrawingSvg({ className, style }: StylableElementProps) {
  const { drawing, applyTool } = useEditor()

  const paddedBounds = drawing.paddedBounds(drawingSettings)

  const drawingBounds = drawing.bounds.expand(1)
  const viewBox = [
    drawingBounds.min.column * tileSize - margin,
    drawingBounds.min.row * tileSize - margin,
    drawingBounds.width * tileSize + margin * 2,
    drawingBounds.height * tileSize + margin * 2,
  ].join(' ')

  return (
    <svg viewBox={viewBox} className={classes(css.drawing, className)} style={style}>
      {Array.from(paddedBounds.positions()).map((position) =>
        renderTileBg(position, () => applyTool(position)),
      )}
      {drawing.elements.map(renderGlyph)}
    </svg>
  )
}

function renderTileBg(position: GridPosition, handleClick: () => void) {
  const { column, row } = position
  return (
    <rect
      key={position.toString()}
      data-position={position.toString()}
      className={css.tileBg}
      x={column * tileSize}
      y={row * tileSize}
      width={tileSize}
      height={tileSize}
      fill="currentColor"
      onClick={handleClick}
    />
  )
}

function renderGlyph([position, glyph]: Tile) {
  const { row, column } = position
  return (
    <text
      key={position.toString() + '-glyph'}
      className={css.glyph}
      x={column * tileSize + tileSize * 0.5}
      y={row * tileSize + tileSize * 0.5}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={px(tileSize * 0.8)}
      fontFamily="sans-serif"
    >
      {glyph}
    </text>
  )
}

const css = stylesheet({
  drawing: {
    cursor: 'pointer',
    maxWidth: percent(100),
    maxHeight: percent(100),
  },
  tileBg: {
    fill: 'white',
    stroke: colors.light,
    strokeWidth: 0.5,
  },
  glyph: {
    pointerEvents: 'none',
  },
})
