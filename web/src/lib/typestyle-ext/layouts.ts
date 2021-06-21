import { percent, viewHeight, viewWidth } from 'csx'
import type { NestedCSSProperties } from 'typestyle/lib/types'

export const centerChild: NestedCSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const fullScreenStyle: NestedCSSProperties = {
  width: viewWidth(100),
  height: viewHeight(100),
}
