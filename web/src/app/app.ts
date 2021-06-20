import log from 'loglevel'
import { createElement } from 'react'
import { render } from 'react-dom'
import { initializeExceptionHandling as initExceptionHandling } from './services/exceptionHandling'
import { initializeFirebase as initFirebase } from './services/firebase'
import { Root } from './ui/Root'

(window as any).log = log

async function start() {
  await initFirebase()

  initExceptionHandling()

  const rootElement = document.getElementById('root')
  render(createElement(Root), rootElement)

  // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
  // Learn more: https://www.snowpack.dev/#hot-module-replacement
  if (import.meta.hot) {
    import.meta.hot.accept()
  }
}

start()
