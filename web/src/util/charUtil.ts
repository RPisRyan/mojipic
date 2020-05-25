import { CellStack, CellPosition, Cell } from "../models"

const latinChars =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
const fullWidthLatinChars =
  '０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ！゛＃＄％＆（）＊＋、ー。／：；〈＝〉？＠［］＾＿‘｛｜｝～'

export const blankChar = '⬜️'

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
