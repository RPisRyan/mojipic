import * as React from 'react'
import { render } from 'react-dom'
import { normalize, setupPage } from "csstips"

import App from './app/App'
import { mountTheme } from './common/theme'

normalize()
setupPage('#root')
mountTheme()

const rootElement = document.getElementById('root')
render(<App />, rootElement)
