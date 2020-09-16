const latinChars =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
const fullWidthLatinChars =
  '０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ！゛＃＄％＆（）＊＋、ー。／：；〈＝〉？＠［］＾＿‘｛｜｝～'

// Not sure
// export const blankChar = '  ' // U+2008 U+2003

// This works, but it forces Android Chrome to use small glyphs
// export const blankChar = '  ' // U+2009 U+2003

// White square
export const blankChar = '◻️'

export function toFullWidth(text: string) {
  const chars = text.split('').map(c => {
    const idx = latinChars.indexOf(c)
    if (idx < 0) {
      return c
    }
    return fullWidthLatinChars[idx]
  })
  return chars.join('')
}
