import React from 'react'
import { classes, stylesheet } from 'typestyle'
import { useRoughSvg } from '../elements/RoughElement'
import { viewWidth } from 'csx'
import svgUri from 'mini-svg-data-uri'
import { palette, spaces } from '../../services/theme'

export function Welcome() {
  const backgroundSvg = useRoughSvg(rc =>
    rc.rectangle(
      5, 5, 90, 90,
      {
        fill: palette.chill.brighten(3).hex(),
        fillWeight: 5
      }),
    {
      viewBox: [0, 0, 100, 100]
    }
  )

  return <article
    className={classes(css.welcome)}
    style={{
      backgroundImage: `url("${svgUri(backgroundSvg)}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }}
  >

    <h2>⭐️ Welcome to Mojipic</h2>
    <ol>
      <li>☝️ <b>Draw</b> an emoji pic by tapping or dragging</li>
      <li>✌️ <b>Copy</b> to clipboard</li>
      <li>👌 <b>Share</b> by pasting into text message, tweet, etc</li>
    </ol>
    <p>
      Feedback? <a href="mailto:info@mojipic.app">Drop us a line</a>
    </p>
  </article>
}

const css = stylesheet({
  welcome: {
    maxWidth: viewWidth(80),
    padding: spaces.lg,
    $nest: {
      'li': {
        listStyleType: 'none',
        marginBottom: spaces.xs
      }
    }
  },
  background: {
  },
  article: {
  }
})