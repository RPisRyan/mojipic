import React, { CSSProperties, useRef } from 'react'
import { useDrag } from 'react-use-gesture'
import {
  getDrawingSize, CellPosition, positionToString,
  positionFromString, isWithinDrawing, positionsAreEqual, getCells
} from '../../domain/drawing'
import { stylesheet } from 'typestyle'
import useMeasure from 'react-use-measure'
import { sizes } from '../../common/theme'
import type { NumericRange } from '../../common/measurement'
import { Cell } from './Cell'
import { useCanvasState } from '../model/canvasState'
import { useEditor } from '../model/useEditor'

/**
 * Component is sized in two stages:
 *   - On first render, set min/max dimensions for container based on the number of cells
 *   - On re-flow after dimension update, explicitly size cells based on layout bounds assigned to container.
 */
export function DrawingGrid() {
  const [canvas] = useCanvasState()
  const { drawing } = canvas

  const { applyTool } = useEditor()

  const [containerRef, bounds] = useMeasure()

  const lastAppliedPosition = useRef<CellPosition>()
  const dragBind = useDrag(
    (dragEvent) => {
      const { event } = dragEvent

      if (!event || !event.target) {
        return
      }

      let target: HTMLElement | null
      if ((typeof TouchEvent) !== 'undefined' && event instanceof TouchEvent) {
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

        applyTool(position)
        lastAppliedPosition.current = position
      }
    },
    {
      filterTaps: true,
      threshold: 4
    }
  )

  const drawingSize = getDrawingSize(canvas.drawing)

  const borderWidth = 3

  // subract column borders from width
  const bordersWidth = borderWidth * drawingSize.columns
  const cellSize = (bounds.width - bordersWidth) / drawingSize.columns

  const widthRange = gridBoundsRange(drawingSize.columns, borderWidth)
  const heightRange = gridBoundsRange(drawingSize.rows, borderWidth)

  const containerSizeLimits: CSSProperties = {
    minWidth: widthRange.min,
    maxWidth: widthRange.max,
    minHeight: heightRange.min,
    // maxHeight: heightRange.max,
  }

  const cells = getCells(drawing).map(({ position, glyph }) => <Cell
    key={positionToString(position)!}
    position={position}
    glyph={glyph}
    cellSize={cellSize}
    onClick={() => {
      if (!positionsAreEqual(lastAppliedPosition.current, position)) {
        lastAppliedPosition.current = position
        applyTool(position)
      }
    }}
  />)

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
  const borders = (tracks + 1) * borderWidth
  return {
    min: tracks * sizes.clickableMin + borders,
    max: tracks * sizes.clickableMax + borders
  }
}
