import React, { useRef, useEffect, useState } from 'react'
import { px, percent } from 'csx'
import { style } from "typestyle"
import interact from 'interactjs'
import Interact from '@interactjs/types/index'
import useMeasure from 'react-use-measure'

import { CellStack, CellPosition, stackStats } from "../models"
import { blankChar } from '../util/charUtil'

interface Props {
  stack: CellStack
  onCharacterPaint: (ev: CellMouseEvent) => void
}

export type CellMouseEvent = {
  position: CellPosition
  character: string
}

export default function PositionedDisplay(props: Props) {
  const [measureRef, bounds] = useMeasure()
  const ref = useRef<HTMLDivElement>(undefined)
  const interactableRef = useRef(null)

  const { rowCount, colCount } = stackStats(props.stack)
  const cellSize = bounds.width / colCount

  // Interactable object captures stale callback
  const handlePaintActionRef = useRef<any>()
  useEffect(() => {
    handlePaintActionRef.current = (x, y) => {
      if (!cellSize) {
        return
      }

      const row = Math.floor(y / cellSize)
      const col = Math.floor(x / cellSize)

      if (col >= 0 && col <= colCount
        && row >= 0 && row <= rowCount) {
        const cell = props.stack.rows[row].cells[col]
        props.onCharacterPaint({
          position: { row, col },
          character: cell.character
        })
      }
    }
  }, [cellSize, rowCount, colCount, props.onCharacterPaint])

  useEffect(() => {
    if (!ref.current) {
      return
    }
    if (interactableRef.current) {
      return
    }

    console.log('mounting interact')
    interactableRef.current = interact(ref.current)
      .draggable({
        origin: 'self',
        modifiers: [
          interact.modifiers.snap({
            targets: [
              interact.snappers.grid({
                x: cellSize / 10,
                y: cellSize / 10,
              })
            ]
          })
        ],
        listeners: {
          move: event => handlePaintActionRef.current(
            event.client.x, event.client.y),
        }
      })
      .pointerEvents({
        origin: 'self'
      })
      .on('tap', event => handlePaintActionRef.current(
        event.clientX, event.clientY))

    return () => {
      console.log('unmounting interact')
      interactableRef.current?.unset()
    }
  }, [ref])

  const outerStyle = style({
    position: 'relative',
    display: 'table',
    fontFamily: 'monospace',
    fontSize: '48px',
    cursor: 'pointer',
    minWidth: '200px',
    width: '100%',
    height: px(rowCount * cellSize),
    touchAction: 'none'
  })

  return <div className={outerStyle} ref={it => {
    ref.current = it
    measureRef(it)
  }}>
    {renderCells(props.stack, cellSize)}
  </div>
}

function renderCells(stack: CellStack, cellSize: number) {
  const { rowCount, colCount } = stackStats(stack)
  const cellStyle = style({
    position: 'absolute',
    display: 'table-cell',
    textAlign: 'center',
    width: percent(100 / colCount),
    height: percent(100 / rowCount),
    fontSize: px(Math.floor(cellSize * 0.9)),
    pointerEvents: 'none'
  })

  const Cell = (props: {
    position: CellPosition
    children: string
  }) => {
    const { row, col } = props.position
    const itemStyle: React.CSSProperties = {
      left: percent(col / colCount * 100),
      top: percent(row / rowCount * 100)
    }
    return <div
      className={cellStyle}
      style={itemStyle}
    >
      {props.children}
    </div>
  }

  return stack.rows.map((line, row) =>
    line.cells.map((cell, col) =>
      <Cell position={{ row, col }} key={`${row}.${col}`}>
        {cell?.character || blankChar}
      </Cell>
    )
  )
}
