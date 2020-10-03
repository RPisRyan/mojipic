import { em, percent } from 'csx'
import { centerChild } from '../../common/layout'
import { styled } from '../../common/components'
import type { NestedCSSProperties } from 'typestyle/lib/types'
import { colors, sizes } from '../../common/theme'

const buttonBase: NestedCSSProperties = {
  padding: 0,
  background: colors.lightest,
  border: `1px solid ${colors.medium}`,
  borderRadius: 3,
  cursor: 'pointer',
  $nest: {
    '&:focus': {
      outline: 0
    },
    '&:hover': {
      filter: 'brightness(95%)',
    }
  }
}

export const GlyphOption = styled('button', {
  ...buttonBase,
  ...centerChild,
  fontSize: percent(150),
  width: sizes.characterButton,
  height: sizes.characterButton
})
