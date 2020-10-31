import { em, linearGradient, rgb } from 'csx'
import React, { PropsWithChildren } from 'react'
import { stylesheet } from 'typestyle'
import { palette } from '../../theme'

export function LogoText({ children }: Props) {
  return <>
    {
      children?.toString().split('').map((letter, idx) =>
        <span key={idx} className={css.letter}>{letter}</span>
      )
    }
  </>
}

type Props = PropsWithChildren<{}>

const topColor = rgb(73, 170, 235)
const bottomColor = rgb(37, 102, 202)

const css = stylesheet({
  letter: {
    display: 'inline-block',
    textAlign: 'center',
    width: em(1.1),
    height: em(1.1),
    margin: em(0.06),
    borderRadius: em(0.1),
    background: linearGradient(
      palette.chill.hex(),
      palette.chill.darken(3).hex()
    ),
    color: 'white',
    fontFamily: `'Jaldi', sans-serif`
  }
})
