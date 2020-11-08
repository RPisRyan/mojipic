const util = typeof require !== 'undefined' && require('util')

export const UTIL_INSPECT_CUSTOM = util?.inspect?.custom
  || Symbol.for('nodejs.util.inspect.custom')
