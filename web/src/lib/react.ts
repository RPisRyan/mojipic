import type { HTMLAttributes } from 'react'

export type StylableElementProps = Pick<HTMLAttributes<HTMLElement>, 'className' | 'style'>
