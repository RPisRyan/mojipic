
import { createElement, HTMLAttributes, ReactHTML } from 'react'
import { classes, style } from 'typestyle'
import type { NestedCSSProperties } from 'typestyle/lib/types'

export function styled<T extends HTMLElement>(
  type: keyof ReactHTML,
  css: NestedCSSProperties | string
) {
  const styleClassName = typeof (css) === 'string'
    ? css
    : style(css)
  return (props: HTMLAttributes<T> | null) => {
    const { className, ...restProps } = props || {}
    return createElement(
      type,
      {
        className: classes(styleClassName, className),
        ...restProps
      }
    )
  }
}
