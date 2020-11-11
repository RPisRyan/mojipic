/***
 * Copyright © 2020 Form * Function Digital. All Rights Reserved.
 */

import { createElement } from 'react'
import { render } from 'react-dom'
import { initializeFirebase } from './services/firebase'
import { Root } from './ui/Root'
import log from 'loglevel'
import { initializeExceptionHandling } from './services/exceptionHandling'

(window as any).log = log

initializeFirebase()

initializeExceptionHandling()

const rootElement = document.getElementById('root')
render(
  createElement(Root),
  rootElement
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
