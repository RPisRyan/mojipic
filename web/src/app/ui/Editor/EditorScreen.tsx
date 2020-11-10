import React from 'react'

import { Editor } from './Editor'
import { stylesheet } from 'typestyle'
import { LogoText } from '../elements/LogoText'
import { linearGradient } from 'csx'
import { colors, palette, spaces } from '../../services/theme'
import { useHelp } from '../../services/helpState'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EditorHelp } from './EditorHelp'

export default function EditorScreen() {
  const { help, toggleHelp } = useHelp()

  return <div className={css.root}>

    <div className={css.application}>

      <div className={css.headerBar}>
        <span className={css.headerTitle}>
          <LogoText>Mojipic</LogoText>
        </span>

        <span className={css.headerRight}>
          <FontAwesomeIcon icon={faQuestionCircle} onClick={toggleHelp} />
        </span>

      </div>
      <div className={css.appBody}>
        <Editor />
      </div>

      <EditorHelp />

    </div>

  </div>
}

const css = stylesheet({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr minmax(300px, 800px) 1fr',
    height: '100vh',
    width: '100vw'
  },
  application: {
    position: 'relative',
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
    padding: spaces.xs,
    display: 'flex'
  },
  headerTitle: {
    textTransform: 'uppercase',
    fontFamily: `'Roboto', sans-serif`,
    flex: 1
  },
  headerRight: {
    alignSelf: 'end',
    cursor: 'pointer'
  },
  appBody: {
    backgroundColor: palette.warm.luminance(0.86).hex(),
    padding: spaces.sm
  }
})
