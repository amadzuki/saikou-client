import React from 'react'
import { Redirect, useParams } from 'react-router-dom'

import items from '../data/items.json'

const RouteAddSlug = () => {
  const { id } = useParams()
  const item = items.find((item) => +item.id === +id)

  return <Redirect to={`/${item.type}/${item.id}/${item.slug}`}></Redirect>
}

export default RouteAddSlug
