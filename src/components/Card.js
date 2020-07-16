import React from 'react'
import styled from '@xstyled/styled-components'

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
`
const CardCover = styled.img`
  width: 190px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 1px 1px 0 grey, -1px -1px 0 grey, 4px 4px 0 black;
`
const CardName = styled.p`
  font-family: annotation;
  font-size: 20px;
  max-width: 200px;
`

const Card = ({ imagesrc, imagealt, name }) => {
  return (
    <CardStyled>
      <CardCover src={imagesrc} alt={imagealt} />
      <CardName>{name}</CardName>
    </CardStyled>
  )
}

export default Card
