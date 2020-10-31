
// export type Point = {
//   left: number,
//   top: number
// }

// export type Rect = Point & {
//   right: number,
//   bottom: number
// }

// // ------

// export const zeroPoint = Object.freeze({
//   left: 0,
//   top: 0
// })

// export const zeroRect = Object.freeze({
//   ...zeroPoint,
//   right: 0,
//   bottom: 0
// })

// function invalidAccess(): number {
//   throw new Error('Not a value')
// }

// export const nullPoint: Point = {
//   get top() {
//     return invalidAccess()
//   },
//   get left() {
//     return invalidAccess()
//   },
// }

// export const nullRect: Rect = {
//   get top() {
//     return invalidAccess()
//   },
//   get left() {
//     return invalidAccess()
//   },
//   get bottom() {
//     return invalidAccess()
//   },
//   get right() {
//     return invalidAccess()
//   }
// }

// //-----

// export function point(left: number, top: number): Point {
//   return { left, top }
// }

// export function emptyRect(p: Point): Rect {
//   return {
//     left: p.left,
//     top: p.top,
//     right: p.left,
//     bottom: p.top
//   }
// }

// export function rectUnion(a: Rect, b: Rect): Rect {
//   if (a === nullRect) return b
//   if (b === nullRect) return a
//   return {
//     left: Math.min(a.left, b.left),
//     top: Math.min(a.top, b.top),
//     right: Math.max(a.right, b.right),
//     bottom: Math.max(a.bottom, b.bottom),
//   }
// }

// export function enclosePoint(a: Rect, p: Point) {
//   if (a === nullRect) return emptyRect(p)
//   if (p === nullPoint) return a
//   return {
//     left: Math.min(a.left, p.left),
//     top: Math.min(a.top, p.top),
//     right: Math.max(a.right, p.left),
//     bottom: Math.max(a.bottom, p.top)
//   }
// }
