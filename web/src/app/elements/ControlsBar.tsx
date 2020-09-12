import { HTMLAttributes } from 'react'
import React from 'react'
import { classes, stylesheet } from 'typestyle'
import { spaces } from '../../common/theme'

export function ControlsBar({ className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return <div
    {...restProps}
    className={classes(css.controlsBar, className)}
  />
}

const css = stylesheet({
  controlsBar: {
    display: 'grid',
    gridAutoFlow: 'row',
    gap: spaces.sm,
    padding: spaces.sm
  }
})
