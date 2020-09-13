
export function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
};

export function isMacOS() {
  return navigator.platform.toUpperCase().indexOf('MAC') >= 0
}

// export function trace<T, U>(func: (t: T) => U) {
//   return (t: T) => {
//     const result = func(t)
//     console.log(result)
//     return result
//   }
// }
