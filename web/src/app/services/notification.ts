import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

export const notify = new Notyf({
  duration: 1200,
  position: { x: 'center', y: 'bottom' },
})
