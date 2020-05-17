import React, { useState } from 'react'
import produce from 'immer'
import * as csstips from 'csstips'
import { Picker, NimblePicker, BaseEmoji, Data } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

import { Display } from './Display'
import { style } from 'typestyle'
import { Stack, StackLine, CharacterEvent } from '../models'
import { getEmojiData } from '../util/emojiUtil'
import SymbolCursor from './SymbolCursor'
import { NestedCSSProperties } from 'typestyle/lib/types'

interface Props {
  initialStack?: Stack
}

const emojiData = getEmojiData('11.0')

const defaultStackRaw = `
abc
ＤＥＦ
✨☁😌`

const defaultStack: Stack = {
  lines: defaultStackRaw.split('\n').map(
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

  const rootStyle: NestedCSSProperties = {
    ...csstips.flex,
  }

  return (
    <div className={style(rootStyle)}>
      <h3>Click on a stack slot to change</h3>

      {/* <SymbolCursor cursor={brush}> */}
      <Display stack={stack} onCharacterClick={handleCharacterClick} />
      {/* </SymbolCursor> */}

      <h3>Brush</h3>
      <input
        type="text"
        className={inputStyle}
        defaultValue={brush}
        size={2}
        maxLength={2}
        width="1em"
        onChange={(ev) => { 
          console.log('selected', ev)
          setBrush(ev.target.value)
        }}
      />

      <h3>Select brush</h3>
      <div>
        <NimblePicker onSelect={handlePickerSelect} data={emojiData} emoji="" title="" />
      </div>
    </div>
  )
}
