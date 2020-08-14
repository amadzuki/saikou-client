import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { UserProfile } from '../pages/index'

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <UserProfile></UserProfile>
  ) : (
    <Redirect to='/login'></Redirect>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
}

export default connect(mapStateToProps, null)(PrivateRoute)
