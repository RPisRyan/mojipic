const latinChars =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
const fullWidthLatinChars =
  '０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ！゛＃＄％＆（）＊＋、ー。／：；〈＝〉？＠［］＾＿‘｛｜｝～'

export function toFullWidth(text: string | null) {
  if (!text) {
    return text
  }
  const chars = text.split('').map((c) => {
    const idx = latinChars.indexOf(c)
    if (idx < 0) {
      return c
    }
    return fullWidthLatinChars[idx]
  })
  return chars.join('')
}
