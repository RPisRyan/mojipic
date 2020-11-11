/**
 * Add handler to `window.onerror` without disrupting any current handler.
 */
export function onGlobalError(handler: OnErrorEventHandlerNonNull) {
  const originalHandler = window.onerror

  const localHandler: OnErrorEventHandler = (
    event: Event | string,
    source?: string,
    lineno?: number,
    colno?: number,
    error?: Error
  ) => {
    if (handler) {
      handler(event, source, lineno, colno, error)
    }

    if (typeof originalHandler === 'function') {
      return originalHandler(event, source, lineno, colno, error)
    }
    return false
  }

  window.onerror = localHandler
}

/**
 * Summarize exception for logging
 */
export function summarizeException(event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) {
  const description = error?.message || event.toString()
  return source
    ? description + ' @ ' + source + ':' + lineno + ':' + colno
    : description
}
