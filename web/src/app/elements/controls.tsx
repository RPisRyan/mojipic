import { em } from 'csx'
import { styled } from '../../common/components'

export const GlyphOption = styled('button', {
  fontSize: '80%',
  width: em(2),
  height: em(2),
  $nest: {
    '&:focus': {
      outline: 0
    }
  }
})
