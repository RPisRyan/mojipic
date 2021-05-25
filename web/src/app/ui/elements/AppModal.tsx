import React, { ComponentProps } from 'react'
import { stylesheet } from 'typestyle'

import Modal from 'react-overlays/Modal'
import { styled } from '../../../lib/typestyle-ext/styled'
import { centerChild, fullScreenFixedStyle } from '../../../lib/typestyle-ext/layouts'

export function AppModal({ children, ...rest }: ComponentProps<typeof Modal>) {
  return (
    <Modal className={css.appModal} keyboard={true} renderBackdrop={Backdrop} {...rest}>
      {children}
    </Modal>
  )
}

const bootstrapOverlayZIndex = 1040

const Backdrop = styled('div', {
  ...fullScreenFixedStyle,
  zIndex: bootstrapOverlayZIndex,
  backgroundColor: '#000',
  opacity: 0.5,
})

const css = stylesheet({
  appModal: {
    ...fullScreenFixedStyle,
    zIndex: bootstrapOverlayZIndex,
    pointerEvents: 'none',
    ...centerChild,
    $nest: {
      '> *': {
        pointerEvents: 'all',
      },
    },
  },
})
