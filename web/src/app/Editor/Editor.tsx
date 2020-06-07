import React, { useContext, PropsWithChildren } from 'react'
import * as csstips from 'csstips'
import 'emoji-mart/css/emoji-mart.css'
import copy from 'copy-to-clipboard'
import GraphemeSplitter from 'grapheme-splitter'
import { style, stylesheet } from 'typestyle'
import { FaRegCopy, FaExpandAlt, FaEraser } from "react-icons/fa"
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import { observer } from 'mobx-react-lite'
import { unprotect } from 'mobx-state-tree'

import { isMacOS } from '../../util/browserUtil'
import PositionedDisplay from './PositionedDisplay'
import { stackToText } from '../../util/stackUtil'
import IconButton from '../elements/IconButton'
import NotyfContext from '../NotyfContext'
import ControlVerticalDivider from '../elements/ControlVerticalDivider'
import { CellStack, EditorNode } from '../../domain/Editor'
import OverlayFill from '../elements/OverlayFill'
import EditableChar from './EditableChar'

const defaultStackRaw = `☀️🌫👍🏿
🌫🌧🌈
🌧🌈💰`

const splitter = new GraphemeSplitter()

const defaultStack: CellStack = {
  sizeIndex: 0,
  rows: defaultStackRaw.split('\n')
    .map(rowChars => ({
      cells: splitter.splitGraphemes(rowChars.trim())
        .map((character) => ({ character }))
    }))
}

const editorStore = EditorNode.create({
  stack: defaultStack,
  brush: '😇'
})
unprotect(editorStore)

export function useEditorStore() {
  return editorStore
}

const Editor: React.FC = observer(() => {
  const store = useEditorStore()
  const notyf = useContext(NotyfContext)

  const handleEraserClick = () => {
    store.brush = ''
  }

  const css = stylesheet({
    editor: {
      cursor: 'pointer',
      ...csstips.flex,
    },
    buttons: {
      margin: 4,
      display: 'flex',
      alignItems: 'center',
      $nest: {
        '> *': {
          margin: 4
        }
      }
    }
  })

  return (
    <div className={css.editor}>
      <h3>💫 Mojistack 💫</h3>

      <div style={{ maxWidth: '500px' }}>

        <PositionedDisplay />

        <div className={css.buttons}>

          <IconButton>
            <EditableChar
              value={store.brush}
              onChange={it => { store.brush = it }} />
          </IconButton>

          <IconButton
            onClick={handleEraserClick}
            mode={store.brush == '' ? 'highlighted' : null}
          >
            <FaEraser />
          </IconButton>

          <ControlVerticalDivider />

          <ResizeButton onClick={store.stack.expand}>
            +
            </ResizeButton>

          <ResizeButton onClick={store.stack.shrink}>
            -
            </ResizeButton>

          <ControlVerticalDivider />

          <IconButton
            onClick={() => {
              const text = stackToText(store.stack as CellStack)
              console.log('copying', text)
              copy(text, {
                format: "text/plain",
                onCopy: () => {
                  notyf.success('copied')
                }
              })
            }}>
            <FaRegCopy />
          </IconButton>

        </div>

      </div>

      {isMacOS() &&
        <div>
          <i>MacOS tip: Hit Command-Ctrl-Space for emoji keyboard</i>
        </div>
      }

      {/* <h3>Select brush</h3>
      <div>
        <NimblePicker onSelect={handlePickerSelect} data={emojiData} emoji="" title="" />
      </div> */}
    </div>
  )
})

function ResizeButton(props: PropsWithChildren<{
  onClick: () => void
}>) {
  return <IconButton onClick={props.onClick}>
    <OverlayFill>
      <MdPhotoSizeSelectSmall style={{ opacity: 0.3 }} />
      <span style={{ fontSize: '36px' }}>
        {props.children}
      </span>
    </OverlayFill>
  </IconButton>
}

export default Editor