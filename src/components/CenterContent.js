import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`

const CenterContent = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>
}

CenterContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CenterContent
