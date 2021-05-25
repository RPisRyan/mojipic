import csstips from 'csstips'
import { styled } from '../../../lib/typestyle-ext/styled'
import { spaces } from '../../services/theme'

export const ControlsBar = styled('div', {
  ...csstips.horizontal,
  gap: spaces.sm,
  padding: spaces.sm,
})

export const GlyphList = styled('div', {
  ...csstips.horizontal,
  gap: spaces.xs,
  padding: spaces.xs,
})
