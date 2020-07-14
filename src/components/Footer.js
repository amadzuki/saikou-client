import React from 'react'
import styled from '@xstyled/styled-components'
import { width } from '@xstyled/system'
import { Link } from 'react-router-dom'

import Button from './Button'

const FooterStyled = styled.footer`
  background-color: darkRed;
  color: lightFont;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`
const SiteLink = styled(Link)`
  font-family: paragraph;
  margin: 20 40;
  text-decoration: none;
  color: lightFont;
`
const WhiteLine = styled.div`
  height: 1px;
  background-color: lightFont;
  ${width}
`
const FooterText = styled.p`
  font-family: title;
  font-size: 20px;
`

const Footer = () => {
  return (
    <FooterStyled>
      <FooterText>Become a Saikou contributor</FooterText>
      <Button borderColor="lightFont" backgroundColor="primary">
        Join us!
      </Button>
      <WhiteLine width="750px"></WhiteLine>
      <LinkContainer>
        <SiteLink to="/about">about</SiteLink>
        <SiteLink>contact</SiteLink>
        <SiteLink>github</SiteLink>
        <SiteLink>facebook</SiteLink>
        <SiteLink>discord</SiteLink>
      </LinkContainer>
      <WhiteLine width="820px"></WhiteLine>
      <FooterText>Copyright © 2020 Saikou</FooterText>
    </FooterStyled>
  )
}

export default Footer
