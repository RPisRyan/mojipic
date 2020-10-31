
import React, { SVGAttributes, useEffect, useMemo, useRef } from 'react'
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

export function useRoughSvg(
  draw: (rc: RoughSVG) => SVGGElement,
  options?: Options & { viewBox?: [number, number, number, number] }
) {
  return useMemo(() => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")

    const rc = rough.svg(svg, { options })
    const node = draw(rc)
    const viewBox = options?.viewBox
      ? `viewBox="${options.viewBox.join(' ')}"`
      : null
    return `<svg xmlns="http://www.w3.org/2000/svg' preserveAspectRatio="none" width="100%" height="100%" ${viewBox}>${node.outerHTML}</svg>`
  }, [draw, options])
}
