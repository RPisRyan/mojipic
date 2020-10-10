import * as React from 'react'
import { render } from 'react-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { App } from './app/App'
import type { FallbackProps } from 'react-error-boundary'
import { setNotifier } from './domain/services'
import { notify } from './common/notification'

setNotifier(notify)

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => location.reload()}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  rootElement
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return <article role="alert">
    <p>Something went wrong:</p>
    <pre>{error?.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </article>
}
