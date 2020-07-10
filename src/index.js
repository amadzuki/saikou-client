import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { ThemeProvider } from '@xstyled/styled-components'

const theme = {
  colors: {
    primary: '#EB5757',
    anime: '#27AE60',
    manga: '#EE8826',
    secondary: '#A71313',
    lightFont: '#ffffff',
    darkFont: '#000000',
  },
  fonts: {
    title: 'Fugaz One',
    paragraph: 'Open Sans',
    annotation: 'Dosis',
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
