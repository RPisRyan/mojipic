import { onGlobalError, summarizeException } from '../../lib/exceptions'
import { analytics } from './firebase'

/**
 * Log `window.onerror` events to analytics.
 * Render errors should be trapped by React error boundary, but this will handle the rest.
 */
export function initializeExceptionHandling() {
  function handle(
    event: Event | string,
    source?: string,
    lineno?: number,
    colno?: number,
    error?: Error,
  ) {
    const description = summarizeException(event, source, lineno, colno, error)

    // Error percolates up to global level to report on console
    // log.error(description)

    analytics.logEvent('exception', {
      description,
      fatal: false,
    })
  }

  onGlobalError(handle)
}
