import React from 'react'
import styled from '@xstyled/styled-components'
import { useParams } from 'react-router-dom'

import Layout from '../components/Layout'

import items from '../data/items.json'

const PageContents = styled.div`
  display: flex;
  justify-content: center;
`

const ItemIntro = styled.div`
  width: 75vw;
  max-height: 450;
  display: flex;
  position: relative;
  margin-top: -60;
  z-index: 1;
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 60 60 0 30;
  max-height: 350;
  overflow: hidden;
`

const Title = styled.h1`
  font-family: title;
  font-size: 45;
  font-weight: 400;
  margin: 20 0 0 0;
  line-height: 1.2;
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

const FavoriteBox = styled.div`
  display: flex;
  align-items: center;
`

const StarSign = styled.img`
  max-height: 50;
`

const FavoriteText = styled.span`
  font-family: paragraph;
  font-size: 24;
  font-weight: 800;
  margin-left: 10;
`

const ItemDetail = () => {
  const { id } = useParams()
  const item = items.find((item) => +item.id === +id)
  const isFavorited = true
  return (
    <Layout>
      <PageContents>
        <ItemIntro>
          <Card src={item.imageSrc} />
          <ItemInfo>
            <Title>{item.name}</Title>
            <SubTitle>
              "In order for something to be obtained, something of equal value
              must be lost. Just like this placeholder :)"
            </SubTitle>
            <FavoriteBox>
              <StarSign
                src={
                  isFavorited
                    ? '/misc/IconFavorited.svg'
                    : '/misc/IconNotFavorited.svg'
                }
              />
              <FavoriteText>
                {isFavorited
                  ? `Unfavorite this ${item.type}`
                  : `Favorite this ${item.type}`}
              </FavoriteText>
            </FavoriteBox>
          </ItemInfo>
        </ItemIntro>
      </PageContents>
    </Layout>
  )
}

export default ItemDetail
