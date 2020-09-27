import * as React from 'react'

import { Editor } from './Editor/Editor'
import { stylesheet, cssRule, cssRaw } from 'typestyle'
import { palette, spaces, colors } from '../common/theme'
import { LogoText } from './elements/LogoText'
import { linearGradient } from 'csx'
import { Welcome } from './Help/Welcome'
import { AppModal } from './elements/AppModal'
import { useState } from 'react'

cssRaw(`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jaldi:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
`)

export default function App() {
  const [showWelcome, setShowWelcome] = useState<boolean>()

  return <div className={css.root}>
    <div className={css.application}>
      <div className={css.headerBar}>
        <span className={css.headerTitle} onClick={() => setShowWelcome(true)}>
          <LogoText>Mojipic</LogoText>
        </span>
      </div>
      <div className={css.appBody}>
        <Editor />
      </div>
    </div>
    <AppModal
      show={showWelcome}
      onHide={() => {
        console.log('hiding')
        setShowWelcome(false)
      }}
      onBackdropClick={() => setShowWelcome(false)}
    >
      <Welcome />
    </AppModal>
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
