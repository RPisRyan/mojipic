import React, { useState } from 'react'
import produce from 'immer'
import { Picker, BaseEmoji } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

import { Display } from './Display'
import { style } from 'typestyle'
import { Stack, StackLine, CharacterEvent } from '../models'

interface Props {
  initialStack?: Stack
}

const defaultData = `abc
123
ｄｅｆ
ＤＥＦ
✨☁😌`

const defaultStack: Stack = {
  lines: defaultData.split('\n').map(
    (line) =>
      ({
        characters: line.split(''),
      } as StackLine),
  ),
}

const inputStyle = style({
  border: '10px solid lightgray',
  fontSize: '64px',
  padding: '4px',
  textAlign: 'center',
})

export default function Editor(props: Props) {
  const [stack, setStack] = useState<Stack>(props.initialStack || defaultStack)
  const [brush, setBrush] = useState<string>('😇')
  const handlePickerSelect = (emoji: BaseEmoji) => {
    console.log(emoji)
    setBrush(emoji.native)
  }
  const handleCharacterClick = (event: CharacterEvent) => {
    const nextState = produce(stack, (draft) => {
      draft.lines[event.position[0]].characters[event.position[1]] = brush
    })
    setStack(nextState)
  }
  return (
    <div>
      <h3>Click on a stack slot to change</h3>
      <Display stack={stack} onCharacterClick={handleCharacterClick} />

      <h3>Brush</h3>
      <input
        type="text"
        className={inputStyle}
        size={1}
        maxLength={1}
        width="1em"
        value={brush}
        onChange={(ev) => setBrush(ev.target.value)}
      />

      <h3>Select brush</h3>
      <div>
        <Picker onSelect={handlePickerSelect} />
      </div>
    </div>
  )
}
