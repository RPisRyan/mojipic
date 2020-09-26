import { PropsWithChildren, ReactNode, useRef } from 'react'
import { usePopper } from 'react-popper'

type Props = PropsWithChildren<{}> & {
  tooltip: ReactNode
}

export function Tooltip({ children, tooltip }: Props) {
  const triggerRef = useRef(null)
  const popperRef = useRef(null)
  const arrowRef = useRef(null)

  const { styles, attributes } = usePopper(
    triggerRef.current,
    popperRef.current,
    {
      modifiers: [{
        name: 'arrow',
        options: { element: arrowRef.current }
      }],
    })
  return <>
    <button type="button" ref={triggerRef}>
      {children}
    </button>

    <div
      ref={popperRef}
      style={styles.popper}
      {...attributes.popper}
    >
      {tooltip}
      <div ref={arrowRef} style={styles.arrow} />
    </div>
  </>
}
