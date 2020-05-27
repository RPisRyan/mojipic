import React, { ComponentType, HTMLAttributes } from "react"
import { stylesheet } from "typestyle"

type Props = HTMLAttributes<HTMLButtonElement> & {
}

const css = stylesheet({
  outer: {
    width: '2em',
    height: '2em',
    fontSize: '30px'
  }
})

export default function IconButton(props: Props) {
  const { children, ...forwardProps } = props
  return <button className={css.outer} {...forwardProps}>
    {children}
  </button>
}
