import { createElement } from 'react'
import { render } from 'react-dom'
import { Root } from './ui/Root'

const rootElement = document.getElementById('root')

render(
  createElement(Root),
  rootElement
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept((it: any) => {
    console.log('reload!!', it)
    window.location.reload()
  })
}
