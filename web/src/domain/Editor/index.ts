import { sizedRows } from '../../util/stackUtil'
import { clamp } from '../../util/primitiveUtil'

export interface CellPosition {
  row: number
  col: number
}

export const CellNode = types.model({
  character: ''
})

export type Cell = typeof CellNode.SnapshotType

export const CellRowNode = types.model({
  cells: types.array(CellNode)
})

export type CellRow = typeof CellRowNode.SnapshotType

export const CellStackNode = types.model({
  sizeIndex: types.integer,
  rows: types.array(CellRowNode)
})
  .actions(self => ({
    setSize(sizeIndex: number) {
      const useSizeIndex = clampStackSize(sizeIndex)
      console.log(sizeIndex, useSizeIndex)
      if (useSizeIndex === self.sizeIndex) {
        // nothing to do
        return
      }
      const newSize = stackSizes[useSizeIndex]
      const newRows = sizedRows(getSnapshot(self.rows), newSize.row, newSize.col)
      applySnapshot(self.rows, newRows)
      self.sizeIndex = useSizeIndex
    }
  }))
  .actions(self => ({
    expand() {
      self.setSize(self.sizeIndex + 1)
    },
    shrink() {
      self.setSize(self.sizeIndex - 1)
    }
  }))

export type CellStack = typeof CellStackNode.SnapshotType

export const EditorNode = types.model({
  stack: CellStackNode,
  brush: ''
})
  .actions(self => ({
  }))

export type Editor = typeof EditorNode.SnapshotType

const stackSizes: CellPosition[] = [
  { row: 3, col: 3 },
  { row: 5, col: 7 },
  { row: 7, col: 15 }
]

function clampStackSize(sizeIndex: number) {
  return clamp(sizeIndex, 0, stackSizes.length - 1)
}
