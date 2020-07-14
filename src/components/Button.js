import React from 'react'
import styled from '@xstyled/styled-components'
import { color, backgroundColor, borderColor } from '@xstyled/system'
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
  ${borderColor}
  ${backgroundColor}
  ${color}
`

const Button = ({ to, borderColor, backgroundColor, color, children }) => {
  return (
    <ButtonTemplate
      to={to}
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      {children}
    </ButtonTemplate>
  )
}

export default Button
