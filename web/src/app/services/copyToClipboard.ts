import { analytics } from './firebase'
import { notify } from './notification'
import { useRecoilValue } from 'recoil'
import { backgroundGlyphState, drawingAtom } from './drawingState'

export function useCopyToClipboard() {
  const background = useRecoilValue(backgroundGlyphState)
  const drawing = useRecoilValue(drawingAtom)

  async function copyToClipboard() {
    const withBackground = drawing.withBackground(background)
    const drawingString = withBackground.toString(false) + `\nmojipic.app`
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
