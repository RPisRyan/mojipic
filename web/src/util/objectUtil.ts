
export function toEntries<T>(obj: T): [keyof T, T[keyof T]][]{
  const ownProps = Object.keys(obj) as [keyof T]
  let i = ownProps.length
  const resArray = new Array(i)
  while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]]
  return resArray
}

export function fromEntries<T>(entries: [keyof T, T[keyof T]][]): T {
  return entries.reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    <T>{}
  );
}
