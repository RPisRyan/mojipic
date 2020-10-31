import React from 'react'
import csstips from 'csstips'
import { cssRaw } from 'typestyle'
import EditorScreen from './Editor/EditorScreen'
import { mountTheme } from '../theme'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

csstips.normalize()
csstips.setupPage('#root')

cssRaw(`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jaldi:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
`)

mountTheme()

export function Root() {
  return <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => location.reload()}
    >
      <EditorScreen />
    </ErrorBoundary>
  </React.StrictMode>
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return <article role="alert">
    <p>Something went wrong:</p>
    <pre>{error?.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </article>
}


