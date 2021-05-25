export function isMobileDevice() {
  return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1
}

export function isMacOS() {
  return navigator.platform.toUpperCase().indexOf('MAC') >= 0
}
