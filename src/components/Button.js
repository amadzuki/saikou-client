import React from 'react'
import styled from '@xstyled/styled-components'
import { color, backgroundColor, borderColor } from '@xstyled/system'

const ButtonTemplate = styled.a`
  font-family: title;
  font-size: 30px;
  padding: 10 20;
  margin: 0 20 20 20;
  border: 5px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  color: lightFont;
  ${borderColor}
  ${backgroundColor}
  ${color}
`

const Button = ({ borderColor, backgroundColor, color, children }) => {
  return (
    <ButtonTemplate
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      {children}
    </ButtonTemplate>
  )
}

export default Button
