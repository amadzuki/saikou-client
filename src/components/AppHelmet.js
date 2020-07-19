import React from 'react'
import { Helmet } from 'react-helmet'

const AppHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default AppHelmet
