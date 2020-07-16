import React from 'react'
import styled from '@xstyled/styled-components'
import { useParams } from 'react-router-dom'

import Layout from '../components/Layout'
import Card from '../components/Card'

import products from '../data/products.json'

const Heading = styled.h1`
  display: flex;
`

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((product) => +product.id === +id)
  return (
    <Layout>
      <Heading>{product.name}</Heading>
      <Card id={id} />
    </Layout>
  )
}

export default ProductDetail
