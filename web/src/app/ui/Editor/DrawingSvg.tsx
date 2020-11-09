import { percent, px, viewHeight } from 'csx'
import React from 'react'
import { stylesheet } from 'typestyle'
import type { GridPosition } from '../../../lib/2d/gridPosition'
import type { Tile } from '../../../lib/emoji-drawing'
import { drawingSettings, useEditor } from '../../services/editorState'
import { colors, styles } from '../../services/theme'

const tileSize = 10
const margin = 6

export function DrawingSvg() {
  const { drawing, applyTool } = useEditor()

  const paddedBounds = drawing.paddedBounds(drawingSettings)

  const drawingBounds = drawing.bounds
  const viewBox = [
    drawingBounds.min.column * tileSize - margin,
    drawingBounds.min.row * tileSize - margin,
    drawingBounds.width * tileSize + margin * 2,
    drawingBounds.height * tileSize + margin * 2
  ].join(' ')

  return <svg viewBox={viewBox} className={css.drawing}>
    {
      Array.from(paddedBounds.positions()).map(position =>
        renderTileBg(
          position,
          () => applyTool(position)
        )
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
    data-position={position.toString()}
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
    background: colors.light,
    cursor: 'pointer',
    maxWidth: percent(100),
    maxHeight: viewHeight(65),
    ...styles.control
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
