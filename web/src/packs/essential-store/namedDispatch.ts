import type { Dispatch } from 'react'

/**
 * Creates dispatch function with separate type and payload:
 *   `dispatch(actionType, actionPayload)` 
 * @param dispatch - Conventional dispatch for action object
 */
export function makeNamedDispatch<A extends TypeDiscriminated>(dispatch: Dispatch<A>):
  // todo: figure out how to make payload argument optional if type has no payload
  <T extends Discriminator<A>, AUnique extends UniqueActionType<A, T>> (
    uniqueType: T,
    payload: UniquePayload<AUnique>
  ) => void {
  function namedDispatch<
    T extends Discriminator<A>,
    AUnique extends UniqueActionType<A, T>
  >(
    uniqueType: T,
    // how to require payload when needed?
    payload?: UniquePayload<AUnique>
  ) {
    dispatch({ type: uniqueType, ...payload } as AUnique)
  }
  return namedDispatch
}

export type NamedDispatch<A extends TypeDiscriminated> =
  (type: Discriminator<A>, payload: Omit<A, 'type'>) => void

export type NamedDispatchUnique<A extends TypeDiscriminated, T extends Discriminator<A>, AUnique extends UniqueActionType<A, T>> =
  (uniqueType: T, payload?: UniquePayload<AUnique>) => void

export type NamedEmptyDispatchUnique<
  A extends TypeDiscriminated,
  T extends Discriminator<A>,
  AUnique extends NoPayloadAction<UniqueActionType<A, T>>
  > =
  (uniqueType: T) => void

export type TypeDiscriminated = { type: string }

export type Discriminator<A extends TypeDiscriminated> = A['type']

type UniqueActionType<A, T> = Extract<A, { type: T }>

type UniquePayload<AUnique> = Omit<AUnique, 'type'>

type NoPayloadAction<A extends TypeDiscriminated>
  = NoExtraProperties<TypeDiscriminated, A>

type Impossible<K extends keyof any> = {
  [P in K]: never
}

type NoExtraProperties<T, U extends T = T> = U & Impossible<Exclude<keyof U, keyof T>>
