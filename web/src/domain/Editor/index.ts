import { types } from "mobx-state-tree"

// export interface CellStack {
//   rows: CellRow[]
// }

// export interface CellRow {
//   cells: Cell[]
// }

// export interface Cell {
//   character: string
// }

export interface CellPosition {
  row: number
  col: number
}

// export interface CharacterEvent {
//   character: string
//   position: Position
// }


export const CellNode = types.model({
  character: ''
})

export type Cell = typeof CellNode.SnapshotType

export const CellRowNode = types.model({
  cells: types.array(CellNode)
})

export type CellRow = typeof CellRowNode.SnapshotType

export const CellStackNode = types.model({
  rows: types.array(CellRowNode)
})

export type CellStack = typeof CellStackNode.SnapshotType

export const EditorNode = types.model({
  stack: CellStackNode,
  brush: ''
})

export type Editor = typeof EditorNode.SnapshotType
