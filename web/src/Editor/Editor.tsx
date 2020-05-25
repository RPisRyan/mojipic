import React, { useState } from 'react'
import produce from 'immer'
import * as csstips from 'csstips'
import 'emoji-mart/css/emoji-mart.css'
import copy from 'copy-to-clipboard'
import GraphemeSplitter from 'grapheme-splitter'
import { style } from 'typestyle'

import { CellStack } from '../models'
import { NestedCSSProperties } from 'typestyle/lib/types'
import { isMobileDevice } from '../util/browserUtil'
import PositionedDisplay, { CellMouseEvent } from './PositionedDisplay'
import BrushEntry from './BrushEntry'
import { tap } from '../util/functionUtil'
import { sizedStack, stackToText } from '../util/stackUtil'

const maxRows = 5
const maxColumns = 7

interface Props {
  initialStack?: CellStack
}

// const emojiData = getEmojiData('11.0')

const isMobile = isMobileDevice()

const defaultStackRaw = `☀️🌫👍🏿
🌫🌧🌈
🌧🌈💰`

const splitter = new GraphemeSplitter()

const defaultStack: CellStack = {
  rows: defaultStackRaw.split('\n')
    .map(rowChars => ({
      cells: splitter.splitGraphemes(rowChars.trim())
        .map((character) => ({ character }))
    }))
}

export default function Editor(props: Props) {
  const [copied, setCopied] = useState<boolean>()
  const [stack, setStack] = useState<CellStack>(props.initialStack || defaultStack)
  const [brush, setBrush] = useState<string>('😇')

  const handleCharacterPaint = (event: CellMouseEvent) => {
    if (event.character !== brush) {
      setStack(state =>
        produce(state, (draft) => {
          const row = draft
            .rows[event.position.row]
          const cell = row && row
            .cells[event.position.col]
          if (cell) cell.character = brush
        })
      )
    }
  }

  const handleExpandClick = () => {
    setStack(current => tap(sizedStack(current, maxRows, maxColumns)))
  }

  const rootStyle: NestedCSSProperties = {
    cursor: 'pointer',
    ...csstips.flex,
  }

  return (
    <div className={style(rootStyle)}>
      <h3>💫 Mojistack 💫</h3>
      <p>Click on the table to change it. Copy and paste where you like!</p>

      <div style={{ maxWidth: '500px' }}>

        <PositionedDisplay
          stack={stack}
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

          <button onClick={handleExpandClick}>
            Expand
          </button>
        </div>
      </div>

      <h3>Brush</h3>
      <BrushEntry brush={brush} setBrush={setBrush} />

      {isMobile &&
        <div>
          (MacOS tip: Hit Command-Ctrl-Space for emoji keyboard)
        </div>
      }

      {/* <h3>Select brush</h3>
      <div>
        <NimblePicker onSelect={handlePickerSelect} data={emojiData} emoji="" title="" />
      </div> */}
    </div>
  )
}
