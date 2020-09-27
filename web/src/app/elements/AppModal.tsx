import React, { ComponentProps, useState } from 'react'
import Modal from 'react-overlays/Modal'
import { centerChild } from '../../common/layout'
import { styled } from '../../common/components'

export const Backdrop = styled('div', {
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#000',
  opacity: 0.5,
})

const ModalContent = styled('div', {
  position: 'fixed',
  margin: 'auto',
  top: 0,
  left: 0,
  // bottom: 0,
  // right: 0,
  zIndex: 1040,
  ...centerChild,
  pointerEvents: 'none'

})

export function AppModal({ children, ...rest }: ComponentProps<typeof Modal>) {
  return <Modal
    keyboard={true}
    renderBackdrop={Backdrop}
    {...rest}
  >
    <ModalContent>
      {children}
    </ModalContent>
  </Modal>
}
