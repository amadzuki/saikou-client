import React from 'react'
import styled from '@xstyled/styled-components'
import { useParams } from 'react-router-dom'

import Layout from '../components/Layout'

import products from '../data/products.json'

const ProductBox = styled.div`
  display: flex;
`

const ProductIntro = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: title;
  font-size: 50;
  font-weight: 400;
`

const SubTitle = styled.p`
  font-family: title;
  font-size: 25;
`

const Card = styled.img`
  width: 252;
  height: 400;
  border: 5px solid black;
  object-fit: cover;
  border-radius: 10px;
`

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((product) => +product.id === +id)
  return (
    <Layout>
      <ProductBox>
        <Card src={product.imageSrc} />
        <ProductIntro>
          <Title>{product.name}</Title>
          <SubTitle>
            "In order for something to be obtained, something of equal value
            must be lost. Just like this placeholder :)"
          </SubTitle>
        </ProductIntro>
      </ProductBox>
    </Layout>
  )
}

export default ProductDetail
