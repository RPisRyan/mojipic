import React, { PropsWithChildren, ReactNode } from "react"

export function If(props: PropsWithChildren<{ when: boolean }>) {
  return <>{
    props.when
      ? props.children
      : null
  }</>
}
