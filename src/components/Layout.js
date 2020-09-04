import React from 'react'
import PropTypes from 'prop-types'

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

Layout.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
}
export default Layout
