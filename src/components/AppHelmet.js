import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const AppHelmet = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name='description' content={description} />}
    </Helmet>
  )
}

AppHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default AppHelmet
