import React from 'react'
import styled from '@xstyled/styled-components'
// import { useRouteMatch, Switch, Route, Link } from 'react-router-dom'

import products from '../data/products.json'

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
`
// const CardLink = styled(Link)`
//   text-decoration: none;
//   color: darkFont;
// `

const CardCover = styled.img`
  width: 190px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 1px 1px 0 grey, -1px -1px 0 grey, 4px 4px 0 black;
  transition-property: transform box-shadow;
  transition-duration: 0.2s;

  &:hover {
    transform: translate(4px, 4px);
    box-shadow: 1px 1px 2px grey, -1px -1px 0 grey;
  }
`
const CardName = styled.p`
  font-family: annotation;
  font-size: 20px;
  max-width: 200px;
`

const Card = ({ id }) => {
  // const { path } = useRouteMatch()
  const product = products.find((product) => +product.id === +id)
  return (
    <>
      <CardStyled>
        {/* <CardLink to={`${product.type}/${product.id}`}> */}
        <CardCover src={product.imageSrc} alt={product.imageAlt} />
        <CardName>{product.name}</CardName>
        {/* </CardLink> */}
      </CardStyled>
    </>
  )
}

export default Card
