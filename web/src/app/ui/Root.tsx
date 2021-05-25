/***
 * Copyright © 2020 Form * Function Digital. All Rights Reserved.
 */

import React from 'react'
import csstips from 'csstips'
import { cssRaw, cssRule } from 'typestyle'
import EditorScreen from './Editor/EditorScreen'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { mountTheme } from '../services/theme'
import log from 'loglevel'
import { analytics } from '../services/firebase'

csstips.normalize()
csstips.setupPage('#root')

cssRaw(`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jaldi:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
`)

cssRule('body', {
  '-webkit-tap-highlight-color': 'transparent',
})

mountTheme()

export function Root() {
  return (
    <React.StrictMode>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={logError}
        onReset={() => location.reload()}
      >
        <EditorScreen />
      </ErrorBoundary>
    </React.StrictMode>
  )
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <article role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </article>
  )
}

function logError(error: Error, info: { componentStack: string }) {
  log.error(error, info)
  analytics.logEvent('exception', {
    description: `${error.toString()} \n components: ${info.componentStack}`,
    fatal: true,
  })
}
