import { em } from 'csx'
import React from 'react'
import { classes, stylesheet } from 'typestyle'
import { colors, sizes } from '../../services/theme'

type Props = {
  direction: 'horizontal' | 'vertical'
}

export function ControlDivider({ direction }: Props) {
  const directionClass = css[direction]
  return <div className={classes(css.controlDivider, directionClass)}/>
}

const css = stylesheet({
  controlDivider: {
    fontSize: sizes.characterButton,
    border: `2px solid ${colors.dark}`,
    borderRadius: 2,
  },
  horizontal: {
    width: em(1.75),
  },
  vertical: {
    height: em(1.75),
  },
})
