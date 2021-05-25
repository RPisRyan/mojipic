export class Stack<T> {
  constructor(public readonly items: T[] = [], public readonly maxItems?: number) {}

  pushed(item: T) {
    const sliceCount = this.maxItems ? this.items.length - this.maxItems + 1 : 0
    const newItems =
      sliceCount > 0 ? [...this.items.slice(sliceCount), item] : [...this.items, item]
    return new Stack(newItems, this.maxItems)
  }

  popped(): [Stack<T>, T | null] {
    if (this.items.length === 0) {
      return [this, null]
    }
    const newItems = [...this.items]
    const poppedItem = newItems.pop()
    return [new Stack(newItems, this.maxItems), poppedItem] as [Stack<T>, T]
  }
}
