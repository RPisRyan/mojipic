import * as React from 'react'

import { Editor } from './Editor/Editor'
import { stylesheet, cssRule } from 'typestyle'
import { palette, spaces, colors } from '../common/theme'
import { LogoText } from './elements/LogoText'
import { linearGradient } from 'csx'

export default function App() {
  return <div className={css.root}>
    <div className={css.application}>
      <div className={css.headerBar}>
        <span className={css.headerTitle}>
          <LogoText>Mojipic</LogoText>
        </span>
      </div>
      <div className={css.appBody}>
        <Editor />
      </div>
    </div>
  </div>
}

const css = stylesheet({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr minmax(300px, 800px) 1fr',
    height: '100%',
    width: '100%'
  },
  application: {
    display: 'grid',
    gridTemplateRows: 'min-content auto',
    gridColumn: 2
  },
  headerBar: {
    background: linearGradient(
      palette.warm.brighten(0.5).hex(),
      palette.warm.darken(0.5).hex()
    ),
    color: colors.lightest,
    padding: spaces.xs
  },
  headerTitle: {
    textTransform: 'uppercase',
    fontFamily: `'Roboto', sans-serif`
  },
  appBody: {
    backgroundColor: palette.warm.luminance(0.86).hex(),
    padding: spaces.sm
  }
})
