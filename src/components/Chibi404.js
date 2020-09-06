import React from 'react'
import styled, { Box } from '@xstyled/styled-components'

const ChibiBox = styled.div`
  display: flex;
  align-items: center;
`

const ChibiImage = styled.img`
  height: 350;
`
const CatchPhrase = styled.p`
  font-family: paragraph;
  font-style: italic;
  font-size: 30;
  margin-right: -40px;
  z-index: 1;
`

const Chibi404 = () => {
  return (
    <Box row>
      <Box col></Box>
      <Box col>
        <ChibiBox>
          <CatchPhrase>"kamimashita?"</CatchPhrase>
          <ChibiImage src='/misc/404-chibi.jpg' />
        </ChibiBox>
      </Box>
    </Box>
  )
}

export default Chibi404
