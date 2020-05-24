export interface CellStack {
  rows: CellRow[]
}

export interface CellRow {
  cells: Cell[]
}

export interface Cell {
  character: string
}

export interface CellPosition {
  row: number
  col: number
}

export interface CharacterEvent {
  character: string
  position: Position
}

export function stackStats(stack: CellStack) {
  return {
    rowCount: stack.rows.length,
    colCount: Math.max(...stack.rows.map(it => it.cells.length))
  }
}
