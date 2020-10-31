import React from 'react'
import { colors, styles } from '../../app/theme'
import { positionToString, CellPosition } from '../../domain/drawing/drawingFunctions'
import { classes, stylesheet } from 'typestyle'

type CellProps = {
  position: CellPosition
  cellSize: number
  glyph: string | null
  onClick: () => void
}

export function Cell({ position, glyph, cellSize, onClick }: CellProps) {
  const { row, col } = position
  return <div
    className={css.cell}
    style={{
      gridRow: row + 1,
      gridColumn: col + 1,
      fontSize: cellSize * 0.8,
    }}
    data-position={positionToString(position)}
    data-glyph={glyph}
    onClick={onClick}
  >
    <span
      className={classes(css.cellContent, !glyph && css.blankCell)}
    >
      {
        glyph || '☻'
      }
    </span>
  </div>
}

const css = stylesheet({
  cell: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    touchAction: 'none',
    ...styles.centerContent
  },
  cellContent: {
    margin: 'auto',
    pointerEvents: 'none'
  },
  blankCell: {
    color: colors.lightest
  }
})
