import React from 'react'
import { PropTypes } from 'prop-types'
import styled from '@xstyled/styled-components'

import users from '../data/users.json'

const StyledAvatar = styled.img`
  width: 114;
  height: 114;
  border: 3px solid black;
  margin: 30;
  object-fit: cover;
  border-radius: 50%;

  &.small {
    width: 68;
    height: 68;
    border: 1px solid black;
    margin: 0;
  }

  &.large {
    width: 200;
    height: 200;
    border: 5px solid black;
    margin: 0;
  }
`

const Avatar = ({ variant, id }) => {
  const { avatar } = users.find((item) => item.id === +id)
  return <StyledAvatar className={variant} src={avatar}></StyledAvatar>
}

Avatar.propTypes = {
  variant: PropTypes.string,
  id: PropTypes.number,
}

export default Avatar
