import { percent, px, viewHeight } from 'csx'
import React, { Fragment } from 'react'
import { stylesheet } from 'typestyle'
import { useHelp } from '../../services/helpState'
import { colors, palette } from '../../services/theme'

export function EditorHelp() {
  const { help, closeHelp } = useHelp()

  if (!help.showHelp) {
    return <Fragment/>
  }
  return (
    <div className={css.editorHelp} onClick={closeHelp}>
      <div className={css.shadow}/>

      <div className={css.content}>
        <img src="/images/help-screen.jpg" className={css.image}/>
        <span className={css.contact}>
          <a href="mailto:info@mojipic.app">Contact ✉️</a>
        </span>
      </div>
    </div>
  )
}

const css = stylesheet({
  editorHelp: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'grid',
  },
  shadow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'black',
    opacity: 0.3,
    width: percent(100),
    height: percent(100),
  },
  content: {
    border: `4px solid ${colors.dark}`,
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    zIndex: 1,
    boxShadow: `2px 2px ${colors.darkest}`,
    borderRadius: px(4),
  },
  image: {
    maxWidth: percent(100),
    maxHeight: viewHeight(80),
    objectFit: 'contain',
    display: 'table-cell',
  },
  contact: {
    width: percent(100),
    background: palette.chill.hex(),
    display: 'flex',
    justifyContent: 'center',
    padding: '0.5em 0',
    $nest: {
      a: {
        color: 'white',
      },
    },
  },
})
