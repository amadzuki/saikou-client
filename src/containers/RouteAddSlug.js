import React from 'react'
import { useParams } from 'react-router-dom'

import Redirector from './Redirector'
import ItemPicker from './ItemPicker'

const RouteAddSlug = ({ type }) => {
  const { id } = useParams()
  return (
    <ItemPicker id={id} type={type}>
      <Redirector></Redirector>
    </ItemPicker>
  )
}

export default RouteAddSlug
