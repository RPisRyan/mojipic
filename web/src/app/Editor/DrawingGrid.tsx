import React, { CSSProperties, useRef, ReactElement } from 'react'
import { useDrag } from 'react-use-gesture'
import { useEditorStore } from '../../domain/Editor/EditorStore'
import { getDrawingSize, CellPosition, positionToString, positionFromString } from '../../domain/Editor/Drawing'
import { stylesheet, classes } from 'typestyle'
import useMeasure from 'react-use-measure'
import { NumericRange } from '../../common/measurement'
import { sizes, styles, colors } from '../../common/theme'

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

  for (let rowIdx = -1; rowIdx <= drawingSize.rows; rowIdx++) {
    const row = rowIdx >= 0 && rowIdx < drawingSize.rows
      ? drawing[rowIdx]
      : null
    for (let colIdx = -1; colIdx <= drawingSize.columns; colIdx++) {
      const position: CellPosition = { row: rowIdx, col: colIdx }
      const glyph = row && (colIdx >= 0 && colIdx < drawingSize.columns)
        ? row[colIdx]
        : null
      cells.push(
        <Cell
          key={positionToString(position)}
          position={position}
          glyph={glyph}
          cellSize={cellSize}
          onClick={() => canvasStore.applyTool(position)}
        />
      )
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
    {bounds.width ? cells : null}
  </div >
}

function Cell({ position, glyph, cellSize, onClick }: CellProps) {
  const { row, col } = position
  return <div
    className={css.cell}
    style={{
      gridRow: row + 2,
      gridColumn: col + 2,
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
