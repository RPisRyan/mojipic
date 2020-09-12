import { NestedCSSProperties } from 'typestyle/lib/types'
import { ReactElement, cloneElement } from 'react'
import { style, classes } from 'typestyle'

/**
 * Create a 'styler' function that will apply styling to elements.
 */
export function styler(...classOrStyles: (NestedCSSProperties | string)[]) {
  const applyClasses = classOrStyles.map(classOrStyle =>
    typeof classOrStyle === 'string'
      ? classOrStyle
      : style(classOrStyle)
  )
  return (element: ReactElement) =>
    cloneElement(
      element,
      {
        ...element.props,
        className: classes(element.props.className, ...applyClasses)
      }
    )
}
