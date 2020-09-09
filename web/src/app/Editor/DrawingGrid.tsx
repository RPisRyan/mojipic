import React, { HTMLAttributes, CSSProperties } from 'react'
import { useEditorStore } from '../../domain/Editor/EditorStore'
import { getDrawingSize } from '../../domain/Editor/Drawing'
import { stylesheet } from 'typestyle'
import { NestedCSSProperties } from 'typestyle/lib/types'
import { em, viewWidth } from 'csx'
import useMeasure from 'react-use-measure'
import { NumericRange } from '../../common/measurement'
import { clamp } from '../../util/primitiveUtil'
import { centerContent } from '../../common/styles'

const cellSizeRange: NumericRange = {
  min: 16,
  max: 96
}

/**
 * Component is sized in two stages:
 *   - On first render, set min/max dimensions for container based on the number of cells
 *   - On re-flow after dimension update, explicitly size cells based on layout bounds assigned to container.
 */
export function DrawingGrid({ }: Props) {
  const { canvasStore } = useEditorStore()
  const { drawing } = canvasStore

  const [measureRef, bounds] = useMeasure()

  const drawingSize = getDrawingSize(canvasStore.drawing)

  const borderWidth = 3

  // subract column borders from width
  const cellSize = (bounds.width - (borderWidth * drawingSize.columns + 1))
    / drawingSize.columns

  const widthRange = gridBoundsRange(drawingSize.columns, borderWidth)
  const heightRange = gridBoundsRange(drawingSize.rows, borderWidth)

  const containerSizeLimits: CSSProperties = {
    minWidth: widthRange.min,
    maxWidth: widthRange.max,
    minHeight: heightRange.min,
    maxHeight: heightRange.max,
  }

  console.log({
    bounds,
    drawingSize,
    cellSize,
    containerSizeLimits
  })

  return <div
    ref={measureRef}
    className={css.drawingGrid}
    style={{
      ...containerSizeLimits,
      borderWidth,

      gap: borderWidth,
      gridAutoColumns: cellSize,
      gridAutoRows: cellSize
    }}
  >
    {
      bounds.width
        ? drawing.map((row, rowIndex) =>
          row.map((glyph, colIndex) =>
            <div
              key={[rowIndex, colIndex].toString()}
              className={css.cell}
              style={{
                gridRow: rowIndex + 1,
                gridColumn: colIndex + 1,
                fontSize: cellSize * 0.8,
              }}
            >
              <span
                className={css.cellContent}
              >
                {glyph}
              </span>
            </div>
          )
        )
        : null
    }
  </div >
}

const css = stylesheet({
  drawingGrid: {
    display: 'grid',
    backgroundColor: 'lightgray',
    border: '1px solid lightgray'
  },
  cell: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',

    ...centerContent
  },
  cellContent: {
    margin: 'auto'
  }
})

type Props = {
}
//& Pick<HTMLAttributes<HTMLDivElement>, 'style'

function gridBoundsRange(tracks: number, borderWidth: number): NumericRange {
  const borders = (tracks + 1) * borderWidth
  return {
    min: tracks * cellSizeRange.min + borders,
    max: tracks * cellSizeRange.max + borders
  }
}
