import React, { useState, PropsWithChildren } from 'react'
import produce from 'immer'
import * as csstips from 'csstips'
import { Picker, NimblePicker, BaseEmoji, Data } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import copy from 'copy-to-clipboard'
import GraphemeSplitter from 'grapheme-splitter'

import { If } from '../util/reactUtil'
import { Display } from './Display'
import { style } from 'typestyle'
import { Stack, StackLine, CharacterEvent } from '../models'
import { getEmojiData } from '../util/emojiUtil'
import { stackToText } from '../util/charUtil'
import SymbolCursor from './SymbolCursor'
import { NestedCSSProperties } from 'typestyle/lib/types'
import { isMobileDevice } from '../util/browserUtil'

interface Props {
  initialStack?: Stack
}

const emojiData = getEmojiData('11.0')

const isMobile = isMobileDevice()

const defaultStackRaw = `☀️🌫🌦
🌫⛈🌈
🌧🌈💰`

const splitter = new GraphemeSplitter()

const defaultStack: Stack = {
  lines: defaultStackRaw.split('\n').map(
    (line) => {
      const characters = splitter.splitGraphemes(line.trim())
      return {
        characters
      } as StackLine
    }
  ),
}

const inputStyle = style({
  border: '10px solid lightgray',
  fontSize: '64px',
  padding: '4px',
  textAlign: 'center',
})

export default function Editor(props: Props) {
  const [copied, setCopied] = useState<boolean>()
  const [stack, setStack] = useState<Stack>(props.initialStack || defaultStack)
  const [brush, setBrush] = useState<string>('😇')
  // const handlePickerSelect = (emoji: BaseEmoji) => {
  //   console.log(emoji)
  //   setBrush(emoji.native)
  // }
  const handleCharacterPaint = (event: CharacterEvent) => {
    console.log('character click', event)
    const nextState = produce(stack, (draft) => {
      draft.lines[event.position[0]].characters[event.position[1]] = brush
    })
    console.log('stack is', nextState)
    setStack(nextState)
    setCopied(false)
  }

  const rootStyle: NestedCSSProperties = {
    cursor: 'pointer',
    ...csstips.flex,
  }

  return (
    <div className={style(rootStyle)}>
      <h3>💫 Mojistack 💫</h3>
      <p>Click on the table to change it. Copy and paste where you like!</p>

      <div style={{ display: 'flex' }}>
        <Display
          stack={stack}
          onCharacterClick={handleCharacterPaint}
          onCharacterPaint={handleCharacterPaint}
        />
        <div>
          <button
            onClick={() => {
              const text = stackToText(stack)
              console.log('copying', text)
              copy(text, {
                format: "text/plain",
                onCopy: () => {
                  setCopied(true)
                }
              })
            }
            }>
            Copy to clipboard
          {copied && <span>- done!</span>}
          </button>
        </div>
      </div>

      <h3>Brush</h3>
      <input
        type="text"
        className={inputStyle}
        defaultValue={brush}
        size={2}
        maxLength={2}
        width="1em"
        style={{
          cursor: 'pointer'
        }}
        onChange={(ev) => {
          const value = ev.target.value.trim()
          console.log('entered', value)
          setBrush(value)
        }}
        onFocus={event => {
          event.target.select()
        }}
      />

      <If when={!isMobile}>
        <div>
          (MacOS tip: Hit Command-Ctrl-Space for emoji keyboard)
        </div>
      </If>

      {/* <h3>Select brush</h3>
      <div>
        <NimblePicker onSelect={handlePickerSelect} data={emojiData} emoji="" title="" />
      </div> */}
    </div>
  )
}
