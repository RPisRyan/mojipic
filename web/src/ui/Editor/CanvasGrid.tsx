import React, { useMemo } from 'react'
import { stylesheet } from 'typestyle'
import { colors } from '../../app/theme'
import { Cell, getCells, positionToString } from '../../domain/drawing/drawingFunctions'
import { useCanvasState } from '../model/canvasState'
import { useEditor } from '../model/useEditor'

export function CanvasGrid() {
  const [canvas] = useCanvasState()
  const { drawing } = canvas

  const { applyTool } = useEditor()

  const cells = getCells(drawing)

  const renderCell = useMemo(() =>
    ({ glyph, position }: Cell) => <svg
      key={positionToString(position)}
      viewBox="0 0 104 104"
      className={css.cell}
      style={{
        gridRow: position.row + 1,
        gridColumn: position.col + 1
      }}
      data-position={positionToString(position)}
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
