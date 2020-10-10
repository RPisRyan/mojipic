import type { Callback } from '../util/functionUtil'

/**
 * Notify service to be injected by application.
 */
export type Notify = {
  success: Callback<string>,
  error: Callback<string>
}

let notifier: Notify = {
  success: s => console.log(s),
  error: s => console.error(s)
}

export function setNotifier(it: Notify) {
  notifier = it
}

export function getNotifier() {
  return notifier
}
