import React, { CSSProperties, useRef } from 'react'
import { useDrag } from 'react-use-gesture'
import { useEditorStore } from '../../domain/Editor/EditorStore'
import { getDrawingSize, CellPosition } from '../../domain/Editor/Drawing'
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
      const position = JSON.parse(target.dataset.position) as CellPosition

      if (position.toString() !== lastAppliedPosition.current?.toString()) {
        canvasStore.applyTool(position)
        lastAppliedPosition.current = position
      }

    }
  )

  const drawingSize = getDrawingSize(canvasStore.drawing)

  const borderWidth = 3

  // subract column borders from width
  const cellSize = (bounds.width - (borderWidth * (drawingSize.columns + 1)))
    / drawingSize.columns

  const widthRange = gridBoundsRange(drawingSize.columns, borderWidth)
  const heightRange = gridBoundsRange(drawingSize.rows, borderWidth)

  const containerSizeLimits: CSSProperties = {
    minWidth: widthRange.min,
    maxWidth: widthRange.max,
    minHeight: heightRange.min,
    maxHeight: heightRange.max,
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
            // onClick={() => canvasStore.applyTool([rowIndex, colIndex])}
            >
              <span
                data-position={JSON.stringify([rowIndex, colIndex])}
                data-glyph={glyph}
                className={classes(css.cellContent, !glyph && css.blankCell)}
              >
                {
                  glyph || '☻'
                }
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
    margin: 'auto'
  },
  blankCell: {
    color: colors.lightest
  }
})

type Props = {
}

function gridBoundsRange(tracks: number, borderWidth: number): NumericRange {
  const borders = (tracks + 1) * borderWidth
  return {
    min: tracks * sizes.clickableMin + borders,
    max: tracks * sizes.clickableMax + borders
  }
}
