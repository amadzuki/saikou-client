import React from 'react'
import { PropTypes } from 'prop-types'
import styled from '@xstyled/styled-components'
import { backgroundColor } from '@xstyled/system'

const TagStyled = styled.div`
  width: 86;
  height: 25;
  border-radius: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  ${backgroundColor};
`

const TagIcon = styled.img`
  height: 16;
  width: 16;
  margin-right: 5px;
`

const TagLabel = styled.span`
  font-family: paragraph;
  font-weight: 600;
  font-size: 12;
  color: white;
`

const Tag = ({ type = 'manga' }) => {
  const iconSrc =
    type === 'manga' ? '/misc/IconManga.svg' : '/misc/IconAnime.svg'
  return (
    <TagStyled backgroundColor={type}>
      <TagIcon src={iconSrc} />
      <TagLabel>{type.toUpperCase()}</TagLabel>
    </TagStyled>
  )
}

Tag.propTypes = {
  type: PropTypes.string,
}

export default Tag
