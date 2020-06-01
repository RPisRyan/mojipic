import { CellStack, Cell, CellRow, CellPosition } from "../domain/Editor"
import { blankChar } from "./charUtil"

export function stackToText(stack: CellStack) {
  const { rowRange, colRange } = measureStack(stack)
  console.log(rowRange, colRange)
  return stack.rows.slice()
    .slice(rowRange[0], rowRange[1] + 1)
    .map(line =>
      line.cells.slice(colRange[0], colRange[1] + 1)
        .map(it => it.character || blankChar)
        .join('')
    )
    .join('\n')
}

export function measureStack(stack: CellStack) {
  let minRow = Number.MAX_SAFE_INTEGER
  let maxRow = 0
  let minCol = Number.MAX_SAFE_INTEGER
  let maxCol = 0
  visitCells(stack, (cell, position) => {
    if (!cell.character) {
      return
    }
    minRow = Math.min(minRow, position.row)
    maxRow = Math.max(maxRow, position.row)
    minCol = Math.min(minCol, position.col)
    maxCol = Math.max(maxCol, position.col)
  })
  if (minRow > maxRow || minCol > maxCol) {
    console.error('failed to measure stack', stack)
    return {
      rowRange: [0, 0],
      colRange: [0, 0]
    }
  }
  return {
    rowRange: [minRow, maxRow],
    colRange: [minCol, maxCol]
  }
}

export function visitCells(
  stack: CellStack,
  visitor: (cell: Cell, position: CellPosition) => void
) {
  stack.rows.forEach((row, rowIndex) =>
    row.cells.forEach((cell, colIndex) =>
      visitor(cell, { row: rowIndex, col: colIndex })
    ))
}

export function sizedRows(rows: CellRow[], rowCount: number, colCount: number): CellRow[] {
  const diff = rowCount - rows.length
  if (diff <= 0) {
    return rows.slice(Math.abs(diff))
      .map(row => sizedRow(row, colCount + 1))
  } else {
    return [
      ...emptyArray(diff).map(() =>
        ({
          cells: emptyCells(colCount)
        })),
      ...rows
        .map(row => sizedRow(row, colCount))
    ]

  }
}

export function sizedRow(row: CellRow, colCount: number) {
  const diff = colCount - row.cells.length
  if (diff < 0) {
    return {
      cells: [...row.cells.slice(0, colCount - 1)]
    }
  } else if (diff > 0) {
    return {
      cells: [...row.cells, ...emptyCells(diff)]
    }
  }
  return row
}

function emptyCells(width: number): Cell[] {
  return emptyArray(width).map(
    () => ({ character: '' }))
}

function emptyArray(length: number) {
  return [...Array(length)]
}

export function stackStats(stack: CellStack) {
  return {
    rowCount: stack.rows.length,
    colCount: Math.max(...stack.rows.map(it => it.cells.length))
  }
}
