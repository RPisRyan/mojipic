import { styled } from '../../../lib/typestyle-ext/styled'

export const Pile = styled('div', {
  display: 'grid',
  $nest: {
    '&>*': {
      gridArea: '1 / 1',
    },
  },
})
