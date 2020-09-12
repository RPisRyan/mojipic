import * as React from 'react'
import 'notyf/notyf.min.css'

import { EditorNew } from './Editor/EditorNew'
import { stylesheet, cssRule } from 'typestyle'

export default function App() {
  return <div>
    <EditorNew />
  </div>
}

cssRule('html', {
  fontSize: 'clamp(12px, 4vw, 36px)'
})
