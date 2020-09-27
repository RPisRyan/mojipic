
import React, { SVGAttributes, useEffect, useRef } from 'react'
import rough from 'roughjs'
import type { Options } from 'roughjs/bin/core'
import type { RoughSVG } from 'roughjs/bin/svg'

type Props = {
  draw: (rc: RoughSVG) => SVGGElement
  options?: Options
} & SVGAttributes<SVGSVGElement>

export function RoughElement({
  draw,
  options,
  ...rest
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null)
  useEffect(() => {
    if (!svgRef.current) return
    const rc = rough.svg(svgRef.current, { options })
    const node = draw(rc)
    svgRef.current.appendChild(node)

    return (): void => {
      svgRef.current?.removeChild(node)
    }

  })

  return <svg ref={svgRef} {...rest} />
}
