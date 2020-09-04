import React from 'react'
import { Provider } from 'react-redux'

import { ThemeContainer, RouterContainer } from './containers'

import reduxStore from './redux/store'

const App = () => {
  return (
    <Provider store={reduxStore}>
      <ThemeContainer>
        <RouterContainer></RouterContainer>
      </ThemeContainer>
    </Provider>
  )
}

export default App
