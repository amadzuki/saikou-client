import React from 'react'
import styled from '@xstyled/styled-components'

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
`
const CardCover = styled.img`
  width: 200px;
  max-height: 280px;
  border-radius: 10px;
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
