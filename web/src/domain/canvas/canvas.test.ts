// import { CanvasCell, createCanvas } from './canvas'
// import { point } from './gridMath'

// describe('canvas', () => {

//   test('bounds', () => {
//     const layer = createCanvas([
//       [point(1, 1), 'X'],
//       [point(2, 5), 'Y'],
//     ])
//     expect(layer.bounds).toEqual({
//       left: 1,
//       top: 1,
//       right: 2,
//       bottom: 5
//     })
//   })

//   test('set', () => {
//     const layer = createCanvas([
//       [point(2, 5), 'A']
//     ])
//     layer.set([point(-1, -1), 'B'])
//     expect(layer.bounds).toEqual({
//       left: -1,
//       top: -1,
//       right: 2,
//       bottom: 5
//     })
//   })

//   test('entries', () => {
//     const cells: CanvasCell[] = [
//       [point(1, 1), 'X'],
//       [point(2, 5), 'Y'],
//     ]
//     const layer = createCanvas(cells)
//     expect(Array.from(layer.cells)).toEqual(
//       cells
//     )
//   })

// })