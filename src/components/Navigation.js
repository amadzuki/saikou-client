import React from 'react'
import styled from '@xstyled/styled-components'

const Logo = styled.h1`
  font-family: 'Fugaz One';
  font-size: 50px;
  color: #eb5757;
  margin: 0;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const SubNav = styled.div`
  display: flex;
  align-items: center;
`
const Link = styled.a`
  font-family: 'Fugaz One';
  font-size: 30px;
  margin: 0 15px;
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
