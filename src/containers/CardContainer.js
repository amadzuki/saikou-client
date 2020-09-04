import React from 'react'
import PropTypes from 'prop-types'

import ItemPicker from './ItemPicker'
import Card from '../components/Card'

const CardContainer = ({ id, type, hideName }) => {
  return (
    <ItemPicker id={id} type={type}>
      <Card hideName={hideName}></Card>
    </ItemPicker>
  )
}

CardContainer.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  hideName: PropTypes.bool,
}

export default CardContainer
