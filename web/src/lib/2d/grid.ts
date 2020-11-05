import { tuple } from '../sequences'
import { GridExtent } from './gridExtent'
import { GridPosition } from './gridPosition'

export type GridElement<T> = [GridPosition, T]

/**
 * Immutable collection of 2D-positioned values.
 */
export class Grid<T> {
  static Empty = new Grid([])

  static createElements<T>(array: ReadonlyArray<Array<T>>): GridElement<T>[] {
    return array.flatMap((rowEntries: Array<T>, row) =>
      rowEntries.map((value: T, column) =>
        tuple(new GridPosition(column, row), value))
    )
  }

  protected constructor(public readonly elements: ReadonlyArray<GridElement<T>>) { }

  // Might be able to constrain the constructor type of subtype (this)
  //  to avoid the need for `withElements`
  protected withElements(elements: Array<GridElement<T>>): this {
    return new (this.constructor as any)(elements)
  }

  get extent(): GridExtent {
    return this.elements
      .reduce((extent, [position]) => extent.include(position), GridExtent.Null)
  }

  get(key: GridPosition) {
    return this.elements.find(([p]) => p.equals(key))
  }

  set(element: GridElement<T>): this {
    const updated = this.elements.filter(([pos]) => !pos.equals(element[0]))
    updated.push(element)
    return this.withElements(updated)
  }

  delete(position: GridPosition) {
    return this.withElements(
      this.elements.filter(([elementPos]) => !elementPos.equals(position))
    )
  }

  forEach(callback: (element: GridElement<T>) => void) {
    this.elements.forEach(callback)
  }

  /**
   * To 2D array of values.
   */
  toArray(): Array<Array<T>> {
    const extent = this.extent
    const origin = extent.min
    const array: Array<Array<T>> = []
    for (const [{ column, row }, value] of this.elements) {
      let rowEntries: Array<T> = array[row - origin.row]
      if (!rowEntries) {
        rowEntries = []
        array[row - origin.row] = rowEntries
      }
      rowEntries[column - origin.column] = value
    }
    return array
  }
}
