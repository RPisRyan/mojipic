import React, { ComponentProps } from 'react'
import { stylesheet } from 'typestyle'

import Modal from 'react-overlays/Modal'
import { centerChild, coverScreen } from '../../app/layout'
import { styled } from '../../../lib/typestyle-ext/styled'

export function AppModal({ children, ...rest }: ComponentProps<typeof Modal>) {
  return <Modal
    className={css.appModal}
    keyboard={true}
    renderBackdrop={Backdrop}
    {...rest}
  >
    {children}
  </Modal>
}

const bootstrapOverlayZIndex = 1040

const Backdrop = styled('div', {
  ...coverScreen,
  zIndex: bootstrapOverlayZIndex,
  backgroundColor: '#000',
  opacity: 0.5,
})

const css = stylesheet({
  appModal: {
    ...coverScreen,
    zIndex: bootstrapOverlayZIndex,
    pointerEvents: 'none',
    ...centerChild,
    $nest: {
      '> *': {
        pointerEvents: 'all'
      }
    }
  }
})
