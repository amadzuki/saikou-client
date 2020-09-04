import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'

const StyledTitle = styled.h1`
  font-family: title;
  font-weight: 400;
`
const TitleText = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>
}

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TitleText
