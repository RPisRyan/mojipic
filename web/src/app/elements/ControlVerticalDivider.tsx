import React from 'react'
import { stylesheet } from "typestyle"
import { sizes } from '../styles'

const css = stylesheet({
  outer: {
    height: sizes.buttonHeight * 1.1,
    width: 4,
    border: '1px solid gray',
    borderRadius: 2,
    background: 'lightgray'
  }
})

export default function ControlVerticalDivider() {
  return <div className={css.outer} />
}
