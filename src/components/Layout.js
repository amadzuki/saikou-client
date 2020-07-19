import React from 'react'

import AppHelmet from './AppHelmet'
import Hero from './Hero'
import Footer from './Footer'

const Layout = ({ backgroundImage, children, title }) => {
  return (
    <>
      <AppHelmet title={title}></AppHelmet>
      <Hero backgroundImage={backgroundImage}></Hero>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
