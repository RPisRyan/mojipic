// import type { Reactive, Subscriber } from '../../packs/reactive-core/types'
// import type { Canvas, CanvasCell } from './canvas'
// import type { Rect } from './gridMath'

// export type ReactiveCanvas = Canvas & Reactive<CanvasState>

// export type CanvasState = {
//   cells: CanvasCell[],
//   bounds: Rect
// }

// export function reactiveCanvas(canvas: Canvas): ReactiveCanvas {
//   const subscribers = new Set<Subscriber<CanvasState>>()

//   function unsubscribe(subscriber: Subscriber<CanvasState>) {
//     subscribers.delete(subscriber)
//   }

//   function notify() {
//     const state = {
//       cells: Array.from(canvas.cells),
//       bounds: canvas.bounds
//     }
//   }

//   return {
//     get cells() {
//       return canvas.cells
//     },
//     get bounds() {
//       return canvas.bounds
//     },
//     set(cell: CanvasCell) {
//       canvas.set(cell)
//       notify()
//     },
//     reset(cells: CanvasCell[]) {
//       canvas.reset(cells)
//       notify()
//     },
//     subscribe(subscriber: Subscriber<CanvasState>) {
//       subscribers.add(subscriber)
//       return () => unsubscribe(subscriber)
//     },
//     unsubscribe
//   }
// }
