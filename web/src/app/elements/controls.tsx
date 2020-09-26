import { em } from 'csx'
import { centerChild } from '../../common/layout'
import { styled } from '../../common/components'
import type { NestedCSSProperties } from 'typestyle/lib/types'
import { colors } from '../../common/theme'

const buttonBase: NestedCSSProperties = {
  padding: 0,
  background: colors.lightest,
  border: `1px solid ${colors.medium}`,
  borderRadius: 3,
  // boxShadow: `1px 1px ${colors.dark}`,
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
  fontSize: '80%',
  lineHeight: 1,
  width: em(2),
  height: em(2)
})
