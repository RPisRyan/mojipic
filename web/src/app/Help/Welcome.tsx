import React from 'react'
import { fonts, palette } from '../../common/theme'
import { stylesheet } from 'typestyle'
import { stackChildren } from '../../common/layout'
import { RoughElement } from '../elements/RoughElement'
import { em, percent, viewHeight, viewWidth } from 'csx'

export function Welcome() {
  return <div className={css.welcome}>
    <RoughElement
      className={css.background}
      draw={rc =>
        rc.rectangle(
          5, 5, 100, 100,
          {
            fill: palette.chill.brighten(3).hex(),
            fillStyle: 'solid'
          })
      }
      viewBox="0 0 110 110"
      preserveAspectRatio="none"
    />
    <article className={css.article}>
      <h2>Welcome to Mojipic</h2>
      <ol>
        <li>Draw a pic by tapping or dragging</li>
        <li>Copy to clipboard</li>
        <li>Paste into text message, tweet, etc</li>
      </ol>
    </article>
  </div>
}

const css = stylesheet({
  welcome: {
    ...fonts.handWritten,
    ...stackChildren(true),
    maxWidth: viewWidth(90),
    maxHeight: viewHeight(90),
  },
  background: {
    height: percent(100),
    width: percent(100)
  },
  article: {
    margin: em(2)
  }
})