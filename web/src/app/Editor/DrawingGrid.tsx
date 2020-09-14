import React, { CSSProperties, useRef, ReactElement } from 'react'
import { useDrag } from 'react-use-gesture'
import { useEditorStore } from '../../domain/Editor/EditorStore'
import { getDrawingSize, CellPosition, positionToString, positionFromString, Drawing, addRow, addColumn } from '../../domain/Editor/Drawing'
import { stylesheet, classes } from 'typestyle'
import useMeasure from 'react-use-measure'
import { NumericRange } from '../../common/measurement'
import { sizes, styles, colors } from '../../common/theme'
import { maxDrawingSize } from '../../domain/Editor/CanvasStore'

/**
 * Component is sized in two stages:
 *   - On first render, set min/max dimensions for container based on the number of cells
 *   - On re-flow after dimension update, explicitly size cells based on layout bounds assigned to container.
 */
export function DrawingGrid({ }: Props) {
  const { canvasStore } = useEditorStore()
  const { drawing } = canvasStore

  const [measureRef, bounds] = useMeasure()

  const lastAppliedPosition = useRef<CellPosition>()
  const dragBind = useDrag(
    (dragEvent) => {
      const { event } = dragEvent
      if (!event?.target) {
        return
      }

      const target = event.target as HTMLElement
      if (!target.dataset.position) {
        return
      }
      const position = positionFromString(target.dataset.position)

      if (position.toString() !== lastAppliedPosition.current?.toString()) {
        // canvasStore.applyTool(position)
        lastAppliedPosition.current = position
      }

    }
  )

  const drawingSize = getDrawingSize(canvasStore.drawing)

  const borderWidth = 3

  // subract column borders from width
  const bordersWidth = borderWidth * (drawingSize.columns + 3)
  const cellSize = (bounds.width - bordersWidth)
    / (drawingSize.columns + 2)

  const widthRange = gridBoundsRange(drawingSize.columns, borderWidth)
  const heightRange = gridBoundsRange(drawingSize.rows, borderWidth)

  const containerSizeLimits: CSSProperties = {
    minWidth: widthRange.min,
    maxWidth: widthRange.max,
    minHeight: heightRange.min,
    maxHeight: heightRange.max,
  }

  const cells: ReactElement[] = []

  if (bounds.width) {
    // If max size reached in one direction, don't show
    //  border cells.
    const rowRange = drawingSize.rows < maxDrawingSize
      ? [-1, drawingSize.rows]
      : [0, drawingSize.rows - 1]
    const colRange = drawingSize.columns < maxDrawingSize
      ? [-1, drawingSize.columns]
      : [0, drawingSize.columns - 1]
    const origin: CellPosition = { row: rowRange[0], col: colRange[0] }

    for (let rowIdx = rowRange[0]; rowIdx <= rowRange[1]; rowIdx++) {
      const row = rowIdx >= 0 && rowIdx < drawingSize.rows
        ? drawing[rowIdx]
        : null
      for (let colIdx = colRange[0]; colIdx <= colRange[1]; colIdx++) {
        const position: CellPosition = { row: rowIdx, col: colIdx }
        const glyph = row && (colIdx >= 0 && colIdx < drawingSize.columns)
          ? row[colIdx]
          : null
        cells.push(
          <Cell
            key={positionToString(position)}
            position={position}
            origin={origin}
            glyph={glyph}
            cellSize={cellSize}
            onClick={() => canvasStore.applyTool(position)}
          />
        )
      }
    }
  }

  return <div
    ref={it => measureRef(it)}
    className={css.drawingGrid}
    style={{
      ...containerSizeLimits,
      borderWidth,
      gap: borderWidth,
      gridAutoColumns: cellSize,
      gridAutoRows: cellSize
    }}
    {...dragBind()}
  >
    {cells}
  </div >
}

function Cell({ position, origin, glyph, cellSize, onClick }: CellProps) {
  const { row, col } = position
  return <div
    className={css.cell}
    style={{
      gridRow: row - origin.row + 1,
      gridColumn: col - origin.col + 1,
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

type CellProps = {
  position: CellPosition
  origin: CellPosition
  cellSize: number
  glyph: string | null
  onClick: () => void
}

const css = stylesheet({
  drawingGrid: {
    display: 'grid',
    backgroundColor: 'lightgray',
    border: '1px solid lightgray',
    userSelect: 'none',
  },
  cell: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
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

type Props = {
}

function gridBoundsRange(tracks: number, borderWidth: number): NumericRange {
  const borders = (tracks + 3) * borderWidth
  return {
    min: tracks * sizes.clickableMin + borders,
    max: tracks * sizes.clickableMax + borders
  }
}
