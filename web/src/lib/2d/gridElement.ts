import type { GridPosition } from './gridPosition'

export type GridElement<T> = [GridPosition, T]

export const GridElement = {

  pickPosition<T>(element: GridElement<T>) {
    return element[0]
  },

  pickValue<T>(element: GridElement<T>) {
    return element[1]
  }

}
