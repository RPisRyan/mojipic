// import { sequence } from '../../common/iterable'
// import { Glyph, glyphIsEmpty } from '../drawing/glyph'
// import { Rect, nullRect, enclosePoint, Point, zeroRect } from './gridMath'
// import { PointMap } from '../../packs/collection-core/PointMap.sample'

// export type Canvas = {
//   cells: Iterable<CanvasCell>
//   bounds: Rect
//   set(cell: CanvasCell): void
//   reset(cells: CanvasCell[]): void
// }

// export type CanvasCell = [Point, Glyph]

// export function createCanvas(initialCells?: CanvasCell[]): Canvas {
//   let map: Map<Point, Glyph>
//   let bounds: Rect

//   function refreshBounds() {
//     bounds = sequence(map.keys()).reduce(
//       enclosePoint,
//       nullRect
//     )
//   }

//   function reset(initialCells?: CanvasCell[]) {
//     map = PointMap(initialCells)
//     if (map.size > 0) {
//       refreshBounds()
//     } else {
//       bounds = zeroRect
//     }
//   }

//   reset(initialCells)

//   return {
//     get cells() {
//       return map.entries()
//     },
//     get bounds() {
//       return bounds
//     },
//     set([position, glyph]: CanvasCell) {
//       if (glyphIsEmpty(glyph)) {
//         map.delete(position)
//         refreshBounds()
//       } else {
//         map.set(position, glyph)
//         bounds = enclosePoint(bounds, position)
//       }
//     },
//     reset
//   }
// }
