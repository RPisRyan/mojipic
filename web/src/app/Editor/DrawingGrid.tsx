import React, { CSSProperties, useRef, ReactElement } from 'react'
import { useDrag } from 'react-use-gesture'
import { useEditorStore } from '../../domain/Editor/EditorStore'
import {
  getDrawingSize, CellPosition, positionToString,
  positionFromString, isWithinDrawing, positionsAreEqual
} from '../../domain/Editor/Drawing'
import { stylesheet } from 'typestyle'
import useMeasure from 'react-use-measure'
import { sizes } from '../../common/theme'
import { maxDrawingSize } from '../../domain/Editor/CanvasStore'
import type { NumericRange } from '../../common/measurement'
import { Cell } from './Cell'


type Props = {
}

/**
 * Component is sized in two stages:
 *   - On first render, set min/max dimensions for container based on the number of cells
 *   - On re-flow after dimension update, explicitly size cells based on layout bounds assigned to container.
 */
export function DrawingGrid({ }: Props) {
  const { canvasStore } = useEditorStore()
  const { drawing } = canvasStore

  const [containerRef, bounds] = useMeasure()

  const lastAppliedPosition = useRef<CellPosition>()
  const dragBind = useDrag(
    (dragEvent) => {
      const { event } = dragEvent

      if (!event || !event.target) {
        return
      }

      let target: HTMLElement | null
      if (event instanceof TouchEvent) {
        var location = (event as any).changedTouches[0]
        target = document.elementFromPoint(location.clientX, location.clientY) as HTMLElement
      } else {
        target = event.target as HTMLElement
      }

      if (!target.dataset.position) {
        return
      }
      const position = positionFromString(target.dataset.position)
      const withinBounds = isWithinDrawing(position, drawing)
      if (
        withinBounds
        && !positionsAreEqual(lastAppliedPosition.current, position)
      ) {
        // console.log('dragging', { position, last: lastAppliedPosition.current })

        canvasStore.applyTool(position)
        lastAppliedPosition.current = position
      }
    },
    {
      filterTaps: true,
      threshold: 4
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
    // maxHeight: heightRange.max,
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
            key={positionToString(position)!}
            position={position}
            origin={origin}
            glyph={glyph}
            cellSize={cellSize}
            onClick={() => {
              if (!positionsAreEqual(lastAppliedPosition.current, position)) {
                lastAppliedPosition.current = position
                canvasStore.applyTool(position)
              }
            }}
          />
        )
      }
    }
  }

  return <div
    ref={containerRef}
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

const css = stylesheet({
  drawingGrid: {
    display: 'grid',
    backgroundColor: 'lightgray',
    border: '1px solid lightgray',
    userSelect: 'none',
  }
})

function gridBoundsRange(tracks: number, borderWidth: number): NumericRange {
  const borders = (tracks + 3) * borderWidth
  return {
    min: tracks * sizes.clickableMin + borders,
    max: tracks * sizes.clickableMax + borders
  }
}
