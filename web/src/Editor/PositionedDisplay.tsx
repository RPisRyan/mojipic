import React, { useRef, useEffect } from 'react'
import { px } from 'csx'
import { style } from "typestyle"
import interact from 'interactjs'
import Interact from '@interactjs/types/index'

import { Stack } from "../models"

interface Props {
  stack: Stack
  width?: number
  onCharacterPaint: (ev: CellMouseEvent) => void
}

type Position = {
  row: number
  column: number
}

export type CellMouseEvent = {
  position: Position
  value: string
}

export default function PositionedDisplay(props: Props) {
  const { width = 200 } = props
  const columnCount = props.stack.lines[0].characters.length
  const rowCount = props.stack.lines.length
  const cellSize = width / columnCount

  const ref = useRef()
  const interactableRef = useRef(null)

  // Interactable captures stale callback
  // There must be a more elegant way to fix it!
  const characterPaintRef = useRef<any>()
  useEffect(() => {
    characterPaintRef.current = props.onCharacterPaint
  }, [props.onCharacterPaint])

  useEffect(() => {
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
          move: function (event) {
            const column = Math.floor(event.client.x / cellSize)
            const row = Math.floor(event.client.y / cellSize)
            const value = props.stack.lines[row].characters[column]

            if (column <= columnCount && row <= rowCount) {
              const onCharacterPaint = characterPaintRef.current
              onCharacterPaint({
                position: {
                  column,
                  row
                },
                value
              })
            }
          }
        }
      })

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
    width: px(width),
    height: px(columnCount * cellSize),
    touchAction: 'none'
  })

  return <div className={outerStyle} ref={ref}>
    {renderCells(props.stack, width, cellSize)}
  </div>
}

function renderCells(stack: Stack, width: number, cellSize: number) {
  const cellStyle = style({
    position: 'absolute',
    display: 'table-cell',
    textAlign: 'center',
    width: px(cellSize),
    height: px(cellSize),
    fontSize: px(Math.floor(cellSize * 0.9)),
    pointerEvents: 'none'
  })

  const Cell = (props: {
    position: Position
    children: string
  }) => {
    const { row, column } = props.position
    const itemStyle: React.CSSProperties = {
      left: px(column * cellSize),
      top: px(row * cellSize)
    }
    return <div
      className={cellStyle}
      style={itemStyle}
    >
      {props.children}
    </div>
  }

  return stack.lines.map((line, row) =>
    line.characters.map((char, column) =>
      <Cell position={{ row, column }} key={`${row}.${column}`}>
        {char}
      </Cell>
    )
  )
}
