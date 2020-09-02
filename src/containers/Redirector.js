import React from 'react'
import { Redirect } from 'react-router-dom'

const Redirector = ({ item, type }) => {
  return <Redirect to={`/${type}/${item.id}/${item.slug}`}></Redirect>
}

export default Redirector
