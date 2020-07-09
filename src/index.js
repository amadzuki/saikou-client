import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { ThemeProvider } from '@xstyled/styled-components'

const theme = {
  colors: {
    primaryRed: '#EB5757',
    primaryGreen: '#27AE60',
    primaryMango: '#F2994A',
    darkRed: '#A71313',
    light: '#ffffff',
    dark: '#000000',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
