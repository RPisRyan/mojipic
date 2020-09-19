import React, { HTMLAttributes } from 'react'
import { classes, stylesheet } from 'typestyle'
import { spaces } from '../../common/theme'
import csstips from 'csstips'

export function ControlsBar({ className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return <div
    {...restProps}
    className={classes(css.controlsBar, className)}
  />
}

const css = stylesheet({
  controlsBar: {
    ...csstips.horizontal,
    gap: spaces.sm,
    padding: spaces.sm
  }
})
