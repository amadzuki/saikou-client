import React from 'react'
import { PropTypes } from 'prop-types'
import { Helmet } from 'react-helmet'

const AppHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

AppHelmet.propTypes = {
  title: PropTypes.string,
}

export default AppHelmet
