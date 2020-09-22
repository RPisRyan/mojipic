import { HTMLAttributes } from 'react'
import { stylesheet, classes } from 'typestyle'
import { sizes, styles, colors, palette } from '../../common/theme'
import React from 'react'
import { em } from 'csx'

export function TileButton({ className, active, ...restProps }: Props) {
  return <button
    className={classes(css.squareButton, active && css.active, className)}
    {...restProps}
  />
}

type Props = HTMLAttributes<HTMLButtonElement> & {
  active?: boolean
}

const css = stylesheet({
  squareButton: {
    ...styles.control,
    borderWidth: 1,
    backgroundColor: colors.getControlBackground({ active: false, hover: false }),
    borderColor: colors.getControlBorder({ active: false, hover: false }),
    color: colors.darkest,
    borderRadius: em(0.2),
    width: sizes.clickable.lg,
    height: sizes.clickable.lg,
    cursor: 'pointer',
    '$nest': {
      '&:hover': {
        backgroundColor: colors.getControlBackground({ active: false, hover: true })
      },
      '&:focus': {
        outline: 0
      }
    }
  },
  active: {
    backgroundColor: colors.getControlBackground({ active: true, hover: false }),
    borderColor: colors.getControlBorder({ active: true, hover: false }),
    textShadow: '0 0 0.5rem white, 0 0 0.6rem white, 0 0 0.7rem white',
    cursor: 'pointer',
    '$nest': {
      '&:hover': {
        backgroundColor: colors.getControlBackground({ active: true, hover: true })
      }
    }
  }
})
