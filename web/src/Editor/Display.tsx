import React from 'react'
import { style } from 'typestyle'
import { toFullWidth } from '../util/charUtil'
import { Stack, CharacterEvent } from '../models'

const displayStyle = style({
  fontFamily: 'monospace',
  fontSize: '48px',
  cursor: 'pointer'
})

interface Props {
  stack: Stack
  onCharacterClick?: (ev: CharacterEvent) => void
}

export function Display(props: Props) {
  const lineElements = props.stack.lines.map((line, lineIndex) => (
    <div key={`l-${lineIndex}`} className={displayStyle}>
      {line.characters.map((character, charIndex) => (
        <span
          key={`c-${lineIndex}-${charIndex}`}
          onClick={
            props.onCharacterClick &&
            (() =>
              props.onCharacterClick!({
                value: character,
                position: [lineIndex, charIndex]
              }))
          }
        >
          {toFullWidth(character)}
        </span>
      ))}
    </div>
  ))
  return <div>{lineElements}</div>
}
