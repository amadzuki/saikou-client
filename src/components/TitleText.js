import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'

const StyledTitle = styled.h1`
  font-family: title;
  font-weight: 400;
`
const TitleText = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

TitleText.propTypes = {
  children: PropTypes.node.isRequired,
}
export default TitleText
