import React from 'react'
import { Stack, CharacterEvent } from "../models"
import { NestedCSSProperties, CSSProperties } from "typestyle/lib/types"
import csstips from 'csstips'
import { px } from 'csx'
import { style } from "typestyle"

interface Props {
  stack: Stack
  width?: number
  onCharacterPaint: (ev: CellMouseEvent) => void
}

type Position = {
  row: number
  column: number
}

type CellMouseEvent = {
  position: Position
}

export default function PositionedDisplay(props: Props) {
  const { width = 200 } = props
  const columnCount = props.stack.lines[0].characters.length

  const cellSize = width / columnCount

  const cellStyle = style({
    position: 'absolute',
    width: px(cellSize),
    height: px(cellSize),
    fontSize: px(Math.floor(cellSize)),
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

  const outerStyle = style({
    position: 'relative',
    fontFamily: 'monospace',
    fontSize: '48px',
    cursor: 'pointer',
    width: px(width),
    height: px(columnCount * cellSize)
  })

  return <div className={outerStyle}>
    {
      props.stack.lines.map((line, row) =>
        line.characters.map((char, column) =>
          <Cell position={{ row, column }} key={`${row}.${column}`}>
            {char}
          </Cell>
        )
      )
    }
  </div>
}
