import React from 'react'

import Hero from './Hero'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Hero></Hero>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
