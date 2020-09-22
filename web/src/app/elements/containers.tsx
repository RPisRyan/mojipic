import { spaces } from '../../common/theme'
import csstips from 'csstips'
import { styled } from '../../common/components'

export const ControlsBar = styled('div', {
  ...csstips.horizontal,
  gap: spaces.sm,
  padding: spaces.sm
})

export const GlyphList = styled('div', {
  ...csstips.horizontal,
  gap: spaces.xs,
  padding: spaces.xs
})
