import { stylesheet } from 'typestyle'
import type { NestedCSSProperties } from 'typestyle/lib/types'

/**
 * Extends `stylesheet` with additional functionality:
 *  - assigns gridArea from key name
 */
export function makeCss<Classes extends Record<string, NestedCSSProperties>>(
  classes: Classes)
  : { [ClassName in keyof Classes]: string } {
  for (const key in classes) {
    const rule = classes[key]
    if (!rule.gridArea) {
      rule.gridArea = key
    }
  }
  return stylesheet(classes)
}
