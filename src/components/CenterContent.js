import React from 'react'
import styled from '@xstyled/styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`

const CenterContent = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>
}

export default CenterContent
