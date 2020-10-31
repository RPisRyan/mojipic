import React, { useRef } from 'react'
import Overlay from 'react-overlays/Overlay'
import { styled } from '../../lib/typestyle-ext/styled'

export function OverlayExample() {
  return <div>{Overlay.toString()}</div>
}

// const Tooltip = styled("div", {
//   position: 'absolute'
// })

// const Arrow = styled("div",
//   {
//     position: 'absolute',
//     width: 10,
//     height: 10,
//     zIndex: -1,
//     bottom: -4, // top
//     $nest: {
//       '&::before': {
//         content: `""`,
//         position: 'absolute',
//         transform: 'rotate(45deg)',
//         background: '#000',
//         width: 10,
//         height: 10,
//         top: 0,
//         left: 0
//       }
//     }
//   }
// )

// //   ${(p) =>
// //     ({
// //       left: "right: -4px;",
// //       right: "left: -4px;",
// //       top: "bottom: -4px;",
// //       bottom: "top: -4px;",
// //     }[p.placement])}
// // `;

// const Body = styled('div',
//   {
//     padding: '3px 8px',
//     color: '#fff',
//     textAlign: 'center',
//     borderRadius: 3,
//     backgroundColor: '#000'
//   })

// // const PLACEMENTS = ["left", "top", "right", "bottom"]

// // const initialSstate = {
// //   show: false,
// //   placement: null,
// // }

// // function reducer(state, [type, payload]) {
// //   switch (type) {
// //     case "placement":
// //       return { show: !!payload, placement: payload }
// //     case "hide":
// //       return { ...state, show: false, placement: null }
// //     default:
// //       return state
// //   }
// // }

// export function OverlayExample() {
//   // const [{ show, placement }, dispatch] = useReducer(
//   //   reducer,
//   //   initialSstate
//   // )
//   const triggerRef = useRef(null)
//   const containerRef = useRef(null)

//   // const handleClick = () => {
//   //   const nextPlacement =
//   //     PLACEMENTS[PLACEMENTS.indexOf(placement) + 1]

//   //   dispatch(["placement", nextPlacement])
//   // }

//   const placement = 'top'
//   const show = true

//   return (
//     <div
//       className="flex flex-col items-center"
//       ref={containerRef}
//     >
//       <button
//         type="button"
//         className="btn mb-4"
//         id="overlay-toggle"
//         ref={triggerRef}
//       // onClick={handleClick}
//       >
//         I am an Overlay target
//       </button>
//       <p>Keep clicking to see the placement change.</p>

//       <Overlay
//         show={show}
//         rootClose
//         offset={[0, 10]}
//         // onHide={() => dispatch("hide")}
//         placement={placement}
//         container={containerRef}
//         target={triggerRef}
//       >
//         {({ props, arrowProps, placement }) => (
//           <Tooltip {...props}>
//             <Arrow
//               {...arrowProps}
//               style={arrowProps.style}
//             />
//             <Body>
//               I&rsquo;m placed to the{" "}
//               <strong>{placement}</strong>
//             </Body>
//           </Tooltip>
//         )}
//       </Overlay>
//     </div>
//   )
// }

// <OverlayExample />