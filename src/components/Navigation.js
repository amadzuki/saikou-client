import React from 'react'
import { PropTypes } from 'prop-types'
import styled from '@xstyled/styled-components'
import { NavLink } from 'react-router-dom'
import { backgroundColor } from '@xstyled/system'
import { connect } from 'react-redux'

const Logo = styled.h1`
  font-family: title;
  font-size: 50;
  font-weight: 400;
  color: primary;
  margin: 0;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20 30;
  ${backgroundColor}
`

const SubNav = styled.div`
  display: flex;
  align-items: center;
`
const NavigationLink = styled(NavLink)`
  font-family: title;
  font-size: 30;
  margin: 0 15;
  text-decoration: none;
  color: darkFont;

  &.active {
    color: primary;
  }
`

const Navigation = ({ shade, isAuthenticated, alias }) => {
  const aliasLowerCase = alias.toLowerCase()
  const aliasSlug = aliasLowerCase.replace(/\s+/g, '-')
  return (
    <Nav backgroundColor={shade}>
      <SubNav>
        <NavigationLink to='/'>
          <Logo>Saikou!</Logo>
        </NavigationLink>
      </SubNav>
      <SubNav>
        <NavigationLink to='/anime' activeClassName='active'>
          Anime
        </NavigationLink>
        <NavigationLink to='/manga' activeClassName='active'>
          Manga
        </NavigationLink>
      </SubNav>
      <SubNav>
        {!isAuthenticated ? (
          <>
            <NavigationLink to='/register' activeClassName='active'>
              Register
            </NavigationLink>
            <NavigationLink to='/login' activeClassName='active'>
              Login
            </NavigationLink>
          </>
        ) : (
          <NavigationLink to={`/profile/${aliasSlug}`} activeClassName='active'>
            Hi, Nakama
          </NavigationLink>
        )}
      </SubNav>
    </Nav>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    alias: state.user.alias,
  }
}

Navigation.propTypes = {
  shade: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  alias: PropTypes.string,
}

export default connect(mapStateToProps)(Navigation)
