import { px } from 'csx'
import React from 'react'
import { stylesheet } from 'typestyle'
import type { GridPosition } from '../../../lib/2d/gridPosition'
import type { Tile } from '../../../lib/emoji-drawing'
import { useEditor } from '../../services/editorState'
import { colors } from '../../services/theme'

const tileSize = 10

export function DrawingSvg() {
  const { drawing, applyTool } = useEditor()
  const extent = drawing.extent
  const bounds = extent.expand(1)

  const viewBox = [
    bounds.min.column * tileSize,
    bounds.min.row * tileSize,
    bounds.width * tileSize,
    bounds.height * tileSize
  ].join(' ')

  return <svg viewBox={viewBox} className={css.drawing}>
    {
      Array.from(bounds.enumerate()).map(position =>
        renderTileBg(position, () => applyTool(position))
      )
    }
    {
      drawing.elements.map(renderGlyph)
    }
  </svg>
}

function renderTileBg(position: GridPosition, handleClick: () => void) {
  const { column, row } = position
  return <rect
    key={position.toString()}
    className={css.tileBg}
    x={column * tileSize} y={row * tileSize}
    width={tileSize} height={tileSize}
    fill="currentColor"
    onClick={handleClick}
  />
}

function renderGlyph([position, glyph]: Tile) {
  const { row, column } = position
  return <text
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
}

const css = stylesheet({
  drawing: {
    background: colors.light
  },
  tileBg: {
    fill: 'white',
    stroke: colors.light,
    strokeWidth: 0.5
  },
  glyph: {
    pointerEvents: 'none'
  }
})
