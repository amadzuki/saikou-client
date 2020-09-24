import React from 'react'
import PropTypes from 'prop-types'

import ItemDetailContainer from '../containers/ItemDetailContainer'

const PageItemDetail = ({ type }) => {
  return <ItemDetailContainer type={type}></ItemDetailContainer>
}

PageItemDetail.propTypes = {
  type: PropTypes.string.isRequired,
}
export default PageItemDetail
