import { HTMLAttributes } from 'react'
import { stylesheet, classes } from 'typestyle'
import { sizes, styles, colors } from '../../common/theme'
import React from 'react'

export function TileButton({ className, ...restProps }: Props) {
  return <button
    className={classes(css.squareButton, className)}
    {...restProps}
  />
}

type Props = HTMLAttributes<HTMLButtonElement>

const css = stylesheet({
  squareButton: {
    ...styles.control,
    borderWidth: 1,
    backgroundColor: colors.getControlBackground(false),
    borderColor: colors.border,
    borderRadius: 3,
    width: sizes.clickTarget,
    height: sizes.clickTarget,
    cursor: 'pointer',
    '$nest': {
      '&:hover': {
        backgroundColor: colors.getControlBackground(true)
      }
    }
  }
})
