import React from 'react'
import styled from '@xstyled/styled-components'
import { useParams } from 'react-router-dom'

import Layout from '../components/Layout'

import items from '../data/items.json'

const ItemBox = styled.div`
  display: flex;
`

const ItemIntro = styled.div`
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

const ItemDetail = () => {
  const { id } = useParams()
  const item = items.find((item) => +item.id === +id)
  return (
    <Layout>
      <ItemBox>
        <Card src={item.imageSrc} />
        <ItemIntro>
          <Title>{item.name}</Title>
          <SubTitle>
            "In order for something to be obtained, something of equal value
            must be lost. Just like this placeholder :)"
          </SubTitle>
        </ItemIntro>
      </ItemBox>
    </Layout>
  )
}

export default ItemDetail
