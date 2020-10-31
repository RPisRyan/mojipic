import Tippy from '@tippyjs/react'
import React, { ComponentProps } from 'react'
import { useHelpState } from '../../state/helpState'

export type Props = Pick<ComponentProps<typeof Tippy>, 'children'> & {
  message: string
}

export function HelpTooltip({
  message,
  children
}: Props) {
  const [help] = useHelpState()
  return <Tippy
    content={
      <span>message</span>
    }
    visible={
      help.helpVisible
    }
  >
    {children}
  </Tippy>
}
