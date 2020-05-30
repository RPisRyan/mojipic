import { CellStack, CellPosition, Cell } from "../domain/models"

const latinChars =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
const fullWidthLatinChars =
  '０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ！゛＃＄％＆（）＊＋、ー。／：；〈＝〉？＠［］＾＿‘｛｜｝～'

// export const blankChar = '  ' // U+2008 U+2003
export const blankChar = '  ' // U+2009 U+2003

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
