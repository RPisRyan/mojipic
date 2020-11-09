import React, { forwardRef, ForwardRefRenderFunction, HTMLAttributes, Ref, RefAttributes } from 'react'
import { stylesheet, classes } from 'typestyle'
import { em, percent } from 'csx'
import { styles, colors, sizes } from '../../services/theme'

export const TileButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, active, ...restProps }, ref) =>
    <button ref={ref}
      className={classes(css.squareButton, active && css.active, className)}
      {...restProps}
    />
)

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
    fontSize: sizes.characterButton,
    width: em(1.75),
    height: em(1.75),
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
