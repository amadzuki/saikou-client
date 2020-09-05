import React from 'react'
import styled from '@xstyled/styled-components'

const CardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 70px 5vw;
`

const Cards = ({ children }) => {
  return <CardsStyled>{children}</CardsStyled>
}

export default Cards
