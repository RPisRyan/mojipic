import { em } from 'csx'
import React from 'react'
import { stylesheet } from "typestyle"

const css = stylesheet({
  outer: {
    height: em(1),
    width: 4,
    border: '1px solid gray',
    borderRadius: 2,
    background: 'lightgray'
  }
})

export default function ControlVerticalDivider() {
  return <div className={css.outer} />
}
