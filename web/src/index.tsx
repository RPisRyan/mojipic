import csstips from 'csstips'
import * as React from 'react'
import { render } from 'react-dom'

import App from './app/App'
import { mountTheme } from './common/theme'

csstips.normalize()
csstips.setupPage('#root')
mountTheme()

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
