import Tippy from '@tippyjs/react'
import React, { ComponentProps } from 'react'
import { useHelp } from '../../services'

export type Props = Pick<ComponentProps<typeof Tippy>, 'children'> & {
  message: string
}

export function HelpTooltip({ message, children }: Props) {
  const { help } = useHelp()
  return (
    <Tippy content={<span>message</span>} visible={help.showHelp}>
      {children}
    </Tippy>
  )
}
