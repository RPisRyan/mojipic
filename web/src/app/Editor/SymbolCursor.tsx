import React, { PropsWithChildren } from 'react'
import { style } from 'typestyle'

type Props = PropsWithChildren<{
  cursor: string
}>

export default function SymbolCursor(props: Props) {
  const cursorRule = props.cursor ? charCursorRule(props.cursor) : undefined
  const rootStyle = {
    cursor: cursorRule,
  }
  return <div className={style(rootStyle)}>{props.children}</div>
}

export function charCursorRule(char: string) {
  return `url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='31' height='37' viewport='0 0 100 100' style='fill:black;font-size:19px;'><text y='50%'>${char}</text></svg>") 16 0,pointer`
}
