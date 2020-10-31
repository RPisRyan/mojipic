import { percent } from 'csx'
import type { NestedCSSProperties } from 'typestyle/lib/types'

export const centerChild: NestedCSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export function stackChildren(stretch?: boolean): NestedCSSProperties {
  const stretchy: NestedCSSProperties = stretch
    ? {
      gridTemplateColumns: percent(100),
      gridTemplateRows: percent(100)
    }
    : {
      gridTemplateColumns: 'auto',
      gridTemplateRows: 'auto'
    }
  return {
    display: 'grid',
    ...stretchy,
    justifyContent: 'center',
    alignContent: 'center',
    $nest: {
      '&>*': {
        gridRow: 1,
        gridColumn: 1
      }
    }
  }
}

export const coverScreen: NestedCSSProperties = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}
