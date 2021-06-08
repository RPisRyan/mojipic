import { useDrawing } from './editorState'
import { analytics } from './firebase'
import { notify } from './notification'

export function useCopyToClipboard() {
  const [drawing] = useDrawing()

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
