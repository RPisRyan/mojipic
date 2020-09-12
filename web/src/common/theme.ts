import { hsl, em, rem } from 'csx'
import { NestedCSSProperties } from 'typestyle/lib/types'

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

const lightness = (level: number) => 1 - level * level / 24
const grays = {
  gray1: hsl(0, 0, lightness(1)),
  gray2: hsl(0, 0, lightness(2)),
  gray3: hsl(0, 0, lightness(3)),
  gray4: hsl(0, 0, lightness(4)),
  gray5: hsl(0, 0, lightness(5)),
  gray6: hsl(0, 0, lightness(6)),
}

export const colors = {
  getControlBackground(hover: boolean) {
    return hover
      ? grays.gray1.darken(0.03).toString()
      : grays.gray1.toString()
  },
  border: grays.gray2.toString()
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
    boxShadow: `0 0 2px ${grays.gray2}, 0 2px 2px ${grays.gray3}`,
  }
}

