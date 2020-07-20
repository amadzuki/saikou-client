import React from 'react'
import styled from '@xstyled/styled-components'
import { Link } from 'react-router-dom'

const ButtonTemplate = styled(Link)`
  font-family: title;
  font-size: 30px;
  padding: 10 20;
  margin: 0 20 20 20;
  border: 5px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  color: lightFont;
  text-decoration: none;

  &.manga {
    background-color: manga;
  }

  &.anime {
    background-color: anime;
  }

  &.footer {
    background-color: primary;
    color: lightFont;
    border-color: lightFont;
  }
`

const Button = (props) => {
  const { to, variant, children } = props
  return (
    <ButtonTemplate to={to} className={variant}>
      {children}
    </ButtonTemplate>
  )
}

export default Button
