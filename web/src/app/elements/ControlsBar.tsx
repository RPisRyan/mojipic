import { HTMLAttributes } from 'react'
import React from 'react'
import { classes, stylesheet } from 'typestyle'
import { spaces } from '../../common/theme'
import { horizontal } from 'csstips'

export function ControlsBar({ className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return <div
    {...restProps}
    className={classes(css.controlsBar, className)}
  />
}

const css = stylesheet({
  controlsBar: {
    ...horizontal,
    gap: spaces.sm,
    padding: spaces.sm
  }
})
