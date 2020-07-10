import React from 'react'
import styled from '@xstyled/styled-components'

const Logo = styled.p`
  font-family: primary;
  font-size: 50;
  color: primary;
  margin: 0;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20;
`

const SubNav = styled.div`
  display: flex;
  align-items: center;
`
const Link = styled.a`
  font-family: primary;
  font-size: 30;
  margin: 0 15;
`

const Navigation = () => {
  return (
    <Nav>
      <SubNav>
        <Logo>Saikou!</Logo>
      </SubNav>
      <SubNav>
        <Link>Anime</Link>
        <Link>Manga</Link>
      </SubNav>
      <SubNav>
        <Link>Register</Link>
        <Link>Login</Link>
      </SubNav>
    </Nav>
  )
}

export default Navigation
