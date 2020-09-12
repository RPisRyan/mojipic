import * as React from 'react'
import { render } from 'react-dom'
import { normalize, setupPage } from "csstips"

import App from './app/App'
import { color } from 'csx'

normalize()
setupPage('#root')

const rootElement = document.getElementById('root')
render(<App />, rootElement)
