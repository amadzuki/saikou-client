import React from 'react'
import styled from '@xstyled/styled-components'

const StyledTitle = styled.h1`
  font-family: title;
  font-weight: 400;
`
const TitleText = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default TitleText
