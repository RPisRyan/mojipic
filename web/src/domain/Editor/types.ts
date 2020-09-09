import { produce } from 'immer'
import { Glyph } from './Drawing'

// Does using fine-grained state require that
// components are the channel for coordinating with higher-level state?
// 
// Can hooks-based stores communicate outside of the component hierarchy??
// They could communicate async, just as you would with a network service..
// Stores to each other look like remote services. Events between services must be handled
//   and dispatched to internal state. Stores should not rely on the 'magic' of React
//   state diffing for passing information to each other.
//  
// Store state transitions could be exposed as an observable.
// How would cyclic changes be prevented?
// 
// 
// 




export type Tool =
  { type: 'pointer' }
  | { type: 'paint', brush: Glyph }
  | { type: 'erase' }


