export function replaceAll(source: string, find: string | RegExp, replace: string) {
  return source.replace(new RegExp(find, 'g'), replace)
}
