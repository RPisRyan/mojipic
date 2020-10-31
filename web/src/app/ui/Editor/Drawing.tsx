import React, { useMemo } from 'react'
import { stylesheet } from 'typestyle'
import type { Cell } from '../../../lib/emoji-drawing'
import { useDrawing, useEditor } from '../../services/editorState'
import { colors } from '../../services/theme'

export function CanvasGrid() {
  const [drawing] = useDrawing()

  const { applyTool } = useEditor()

  const renderCell = useMemo(() =>
    ([position, glyph]: Cell) => <svg
      key={position?.toString()}
      viewBox="0 0 104 104"
      className={css.cell}
      style={{
        gridRow: position.y + 1,
        gridColumn: position.x + 1
      }}
      data-position={position.toString()}
      onClick={() => applyTool(position)}
    >
      <g transform="translate(2 2)">
        <rect width="100" height="100" fill="currentColor" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="80px"
          fontFamily="sans-serif"
        >
          {glyph}
        </text>
      </g>
    </svg>,
    [applyTool]
  )

  const cells = drawing.cells()
  return <div className={css.canvasGrid}>
    {cells.map(cell => renderCell(cell))}
  </div>
}

const css = stylesheet({
  canvasGrid: {
    display: 'grid',
    userSelect: 'none',
    gridTemplateColumns: 'repeat(auto-fit, 1fr)',
    gridTemplateRows: 'repeat(auto-fit, 1fr)',
    background: colors.light
  },
  cell: {
    color: 'white'
  }
})
