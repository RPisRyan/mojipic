import React from 'react'
import * as csstips from 'csstips'
import { style } from 'typestyle'
import { toFullWidth } from '../util/charUtil'
import { Stack, CharacterEvent } from '../models'
import { NestedCSSProperties } from 'typestyle/lib/types'

const staticStyle: NestedCSSProperties = {
  fontFamily: 'monospace',
  fontSize: '48px',
  cursor: 'pointer',
  ...csstips.content,
}

interface Props {
  stack: Stack
  onCharacterClick: (ev: CharacterEvent) => void
  onCharacterPaint: (ev: CharacterEvent) => void
}

export function Display(props: Props) {
  const lineElements = props.stack.lines.map((line, lineIndex) => (
    <div key={`l-${lineIndex}`} className={style(staticStyle)}>
      {
        line.characters.map((character, charIndex) => (
          <span
            key={`c-${lineIndex}-${charIndex}`}

            onMouseMove={it => it.preventDefault()}
            onTouchMove={it => it.preventDefault()}

            onClick={() =>
              props.onCharacterClick({
                value: character,
                position: [lineIndex, charIndex],
              })
            }

            onMouseEnter={event => {
              if (event.buttons === 1) {
                props.onCharacterPaint({
                  value: character,
                  position: [lineIndex, charIndex],
                })
              }
            }}

            onMouseDown={event => {
              event.preventDefault()
              props.onCharacterPaint({
                value: character,
                position: [lineIndex, charIndex],
              })
            }}

            onTouchStart={event => {
              event.preventDefault()
              props.onCharacterPaint({
                value: character,
                position: [lineIndex, charIndex],
              })
            }}

          >
            {toFullWidth(character)}
          </span>
        ))
      }
    </div>
  ))
  return <div>{lineElements}</div>
}
