import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { em } from 'csx'
import React, { useRef } from 'react'
import { useRootClose } from 'react-overlays'
import { stylesheet } from 'typestyle'
import { colors, palette, useHelp } from '../../services'

export function Greeting() {
  const ref = useRef(null)
  const { help, hideGettingStarted } = useHelp()

  useRootClose(ref, hideGettingStarted, {
    disabled: !help.showGreeting,
  })

  return (
    <>
      {help.showGreeting && (
        <div ref={ref} className={css.getStarted}>
          Welcome! Tap the grid to place emoji.
          <br/>
          Copy to clipboard&nbsp;
          <FontAwesomeIcon icon={faCopy}/> for sharing.
        </div>
      )}
    </>
  )
}

const css = stylesheet({
  getStarted: {
    position: 'absolute',
    marginLeft: em(3),
    marginTop: em(2),
    maxWidth: em(14),
    borderRadius: em(0.25),
    padding: em(1.1),
    color: colors.darkest,
    cursor: 'pointer',
    userSelect: 'none',
    border: `4px solid ${palette.chill.hex()}`,
    background: palette.chill.luminance(0.8).hex(),
  },
})
