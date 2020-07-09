import React from 'react'
import styled from '@xstyled/styled-components'

const ButtonTemplate = styled.a`
  font-family: 'Fugaz One';
  font-size: 30px;
  padding: 10 20;
  margin: 20;
  background-color: ${(props) =>
    props.variant === 'primary' ? '#27AE60' : '#F2994A'};
  border: 5px solid #333333;
  box-sizing: border-box;
  border-radius: 10px;
  color: #ffffff;
`

const Button = ({ variant, children }) => {
  return <ButtonTemplate variant={variant}>{children}</ButtonTemplate>
}

export default Button
