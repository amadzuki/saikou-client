import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

const Redirector = ({ item, type }) => {
  return <Redirect to={`/${type}/${item.id}/${item.slug}`}></Redirect>
}

Redirector.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
}
export default Redirector
