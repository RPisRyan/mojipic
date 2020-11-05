import { GridBounds as GridBounds } from './gridBounds'
import type { GridPosition } from './gridPosition'

export type GridElement<T> = [GridPosition, T]

/**
 * Immutable collection of 2D-positioned values.
 */
export class Grid<T> {
  static Empty = new Grid([])

  protected constructor(public readonly elements: ReadonlyArray<GridElement<T>>) { }

  // Might be able to constrain the constructor type of subtype (this)
  //  to avoid the need for `withElements`
  protected withElements(elements: Array<GridElement<T>>): this {
    return new (this.constructor as any)(elements)
  }

  get bounds(): GridBounds {
    return this.elements
      .reduce((extent, [position]) => extent.include(position), GridBounds.Null)
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
}
