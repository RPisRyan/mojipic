import { rem } from 'csx'
import { NestedCSSProperties } from 'typestyle/lib/types'
import chroma from 'chroma-js'

export const sizes = {
  clickableMin: 24,
  clickableMax: 96,
  clickTarget: '2rem'
}

export const spaces = {
  xs: rem(0.25),
  sm: rem(0.5),
  md: rem(1),
  lg: rem(2)
}

const black = chroma([0, 0, 0])

const neutral = {
  white: chroma('white'),
  lightest: black.luminance(0.95),
  light: black.luminance(0.9),
  medium: black.luminance(0.5),
  dark: black.luminance(0.2),
  darkest: black.luminance(0.05),
  black: black.luminance(0.01)
}

export const palette = {
  shout: chroma([209, 17, 65]),
  win: chroma([0, 177, 89]),
  chill: chroma([0, 174, 219]),
  energy: chroma([243, 119, 53]),
  warm: chroma([255, 196, 37]),
  neutral: neutral
}

export type ControlState = {
  active: boolean,
  hover: boolean
}

export const colors = {
  getControlBackground({ active, hover }: ControlState): string {
    if (active) {
      return palette.energy.brighten(1.5).hex()
    }
    return hover
      ? neutral.light.hex()
      : neutral.lightest.hex()
  },
  getControlBorder({ active }: ControlState): string {
    if (active) {
      return palette.energy.brighten().hex()
    }
    return neutral.medium.hex()
  },
  border: neutral.medium.hex(),
  dark: neutral.dark.hex(),
  darkest: neutral.darkest.hex()
}

export const styles: Record<string, NestedCSSProperties> = {
  centerContent: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  },
  groupBorder: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 3
  },
  control: {
    boxShadow: `0 0 2px ${neutral.medium}, 0 2px 2px ${neutral.medium}`,
  }
}
