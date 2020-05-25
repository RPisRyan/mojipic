import { style } from "typestyle"
import React, { useRef } from "react"

interface Props {
  brush: string
  setBrush: (value: string) => void
}

const inputStyle = style({
  border: '10px solid lightgray',
  fontSize: '64px',
  padding: '4px',
  textAlign: 'center',
})

export default function BrushEntry(props: Props) {
  const ref = useRef()
  return <input
    type="text"
    ref={ref}
    className={inputStyle}
    defaultValue={props.brush}
    size={2}
    maxLength={4}
    width="1em"
    style={{
      cursor: 'pointer'
    }}
    onKeyDown={event => {
      console.log('keydown', event.which)
    }}
    onChange={(ev) => {
      const value = ev.target.value.trim()
      console.log('entered', value)
      props.setBrush(value)
      //@ts-ignore <shrug>
      ref.current?.blur()
    }}
    onFocus={event => {
      event.target.select()
    }}
  />
}
