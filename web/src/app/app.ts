/***
 * Copyright © 2020 Form * Function Digital. All Rights Reserved.
 */

import { createElement } from 'react'
import { render } from 'react-dom'
import { initializeFirebase as initFirebase } from './services/firebase'
import { Root } from './ui/Root'
import log from 'loglevel'
import { initializeExceptionHandling as initExceptionHandling } from './services/exceptionHandling'
import { initConsoleServices } from './services/globalServices'

(window as any).log = log

async function start() {

  await initFirebase()

  initExceptionHandling()

  initConsoleServices()

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

}

start()
