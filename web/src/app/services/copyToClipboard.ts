import { analytics } from './firebase'
import { notify } from './notification'
import { useRecoilValue } from 'recoil'
import { drawingAtom } from './drawingState'

export function useCopyToClipboard() {
  const drawing = useRecoilValue(drawingAtom)

  async function copyToClipboard() {
    const drawingString = drawing.toString(false) + `\nmojipic.app`
    await navigator.clipboard.writeText(drawingString)
    notify.success('copied')
    analytics.logEvent('share', {
      content_type: 'drawing',
      item_id: drawingString,
      method: 'clipboard',
    })
  }

  return { copyToClipboard }
}
