import { CellStack } from "../models"

const latinChars =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
const fullWidthLatinChars =
  '０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ！゛＃＄％＆（）＊＋、ー。／：；〈＝〉？＠［］＾＿‘｛｜｝～'

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

export function stackToText(stack: CellStack) {
  return stack.rows.map(line =>
    line.cells.map(it => it.character || '＿')
      .join('')
  )
    .join('\n')
    .trim()
}