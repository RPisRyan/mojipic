import React, { HTMLAttributes } from "react"
import { stylesheet, classes } from "typestyle"
import { sizes } from "../styles"
import { borderColor } from "csx"

type Props = HTMLAttributes<HTMLButtonElement> & {
  mode?: 'highlighted'
}

const css = stylesheet({
  outer: {
    width: sizes.buttonHeight,
    height: sizes.buttonHeight,
    fontSize: sizes.buttonHeight * 0.5
  },
  highlighted: {
    border: '3px solid darkblue',
    borderRadius: 3
  }
})


export default function IconButton(props: Props) {
  const { children, ...forwardProps } = props
  return <button
    className={classes(css.outer, props.mode === 'highlighted' && css.highlighted)}
    {...forwardProps}>
    {children}
  </button>
}
