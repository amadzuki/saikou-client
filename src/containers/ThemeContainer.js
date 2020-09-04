import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'

const theme = {
  colors: {
    primary: '#EB5757',
    anime: '#27AE60',
    manga: '#EE8826',
    secondary: '#A71313',
    lightFont: '#ffffff',
    darkFont: '#000000',
    whiteShade: 'rgba(255,255,255, 0.7)',
  },
  fonts: {
    title: 'Fugaz One',
    paragraph: 'Open Sans',
    annotation: 'Dosis',
  },
}

const ThemeContainer = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeContainer
