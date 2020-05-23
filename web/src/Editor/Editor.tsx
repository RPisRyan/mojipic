import React, { useState } from 'react'
import produce from 'immer'
import * as csstips from 'csstips'
import 'emoji-mart/css/emoji-mart.css'
import copy from 'copy-to-clipboard'
import GraphemeSplitter from 'grapheme-splitter'
import { style } from 'typestyle'

import { If } from '../util/reactUtil'
import { Stack, StackLine, CharacterEvent } from '../models'
import { stackToText } from '../util/charUtil'
import { NestedCSSProperties } from 'typestyle/lib/types'
import { isMobileDevice } from '../util/browserUtil'
import PositionedDisplay, { CellMouseEvent } from './PositionedDisplay'
import BrushEntry from './BrushEntry'

interface Props {
  initialStack?: Stack
}

// const emojiData = getEmojiData('11.0')

const isMobile = isMobileDevice()

const defaultStackRaw = `☀️🌫🌦
🌫🌧🌈
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

export default function Editor(props: Props) {
  const [copied, setCopied] = useState<boolean>()
  const [stack, setStack] = useState<Stack>(props.initialStack || defaultStack)
  const [brush, setBrush] = useState<string>('😇')

  const handleCharacterPaint = (event: CellMouseEvent) => {
    if (event.value !== brush) {
      setStack(state =>
        produce(state, (draft) => {
          draft
            .lines[event.position.row]
            .characters[event.position.column] = brush
        })
      )
    }
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

        <PositionedDisplay
          stack={stack}
          width={200}
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
      <BrushEntry brush={brush} setBrush={setBrush} />

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
