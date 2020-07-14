import React from 'react'

import Hero from './Hero'
import Footer from './Footer'

const Layout = ({ backgroundImage, children }) => {
  return (
    <>
      <Hero backgroundImage={backgroundImage}></Hero>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
