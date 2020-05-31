import { stylesheet, classes } from 'typestyle';
import React, { PropsWithChildren, cloneElement, Children, ReactElement } from 'react';

const css = stylesheet({
  overlay: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  child: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    border: 'none',
    width: '100%',
    height: '100%'
  }
})

type Props = PropsWithChildren<{}>

export default function OverlayFill(props: Props) {
  return <div className={css.overlay}>
    {
      Children.map(props.children, (child: ReactElement) =>
        cloneElement(child,
          {
            className: classes(child.props.className, css.child),
            ...child.props
          }
        )
      )
    }
  </div>
}
