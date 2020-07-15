import React from 'react'
import styled from '@xstyled/styled-components'

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 25px;
`
const CardCover = styled.img`
  width: 200px;
  height: 317px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 1px 1px 5px grey, -1px -1px 5px grey;
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
