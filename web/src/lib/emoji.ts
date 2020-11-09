import dataRaw from 'emoji-mart/data/all.json'
import type { Data } from 'emoji-mart'
import type { Emoji } from 'emoji-mart/dist-es/utils/data'
import { toEntries } from './objects'

const data = (dataRaw as any) as Data

export function getEmojiData(maxVersion: string): Data {
  return {
    aliases: data.aliases,
    categories: data.categories,
    emojis: filterEmojis(data.emojis, maxVersion),
    compressed: data.compressed,
  }
}

function filterEmojis(emojis: { [key: string]: Emoji }, maxVersion: string): { [key: string]: Emoji } {
  const result: any = {}
  toEntries(emojis).forEach(([key, value]) => {
    if (availableInVersion(value, maxVersion)) {
      result[key] = value
    }
  })
  return result
}

function availableInVersion(emoji: Emoji, maxVersion: string) {
  return emoji.added_in == null || compareVersions((emoji.added_in as any) as string, maxVersion) <= 0
}

function compareVersions(a: string, b: string) {
  return versionStringToInt(a) - versionStringToInt(b)
}

function versionStringToInt(versionString: string): number {
  if (!versionString) {
    return 0
  }
  const parts = versionString.split('.')
  if (parts.length === 0) {
    return 0
  }
  let value = parseInt(parts[0]) * 100
  if (parts.length > 0) {
    value += parseInt(parts[1])
  }
  return value
}
