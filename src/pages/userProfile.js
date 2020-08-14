import React from 'react'
import styled from '@xstyled/styled-components'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import dayjs from 'dayjs'

import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import Card from '../components/Card'

import { deauthenticate } from '../redux/actions/index'

const PageContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const UserIntro = styled.div`
  display: flex;
  width: 1100;
  margin: -60 0 20 0;
`
const AvatarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`
const ButtonLogOut = styled.button`
  font-family: title;
  margin: 0 20 20 20;
  border: 5px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  color: lightFont;
  background-color: darkRed;
  font-size: 20;
  padding: 5px 10px;
`
const WhiteRoundSpace = styled.div`
  border-radius: 50%;
  border: 25px solid white;
`
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 60;
  padding-left: 20;
`
const TitleText = styled.h1`
  font-family: title;
  font-weight: 400;
`
const DateJoined = styled.p`
  font-family: annotation;
  font-size: 25;
  margin: 10 0;
`
const UserBio = styled.p`
  font-family: paragraph;
  font-size: 25;
  font-style: italic;
  padding-top: 27;
`
const FavoriteItems = styled.div`
  width: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30;
`
const Favorites = styled.div`
  margin-top: 20;
  display: flex;
`
const UserProfile = ({ deauthenticate, user }) => {
  const favoriteAnime = [2, 7, 11, 9, 19]
  const favoriteManga = [32, 27, 41, 49, 29]
  const history = useHistory()
  const logout = () => {
    deauthenticate()
    history.push('/logout')
  }
  return (
    <>
      <Layout
        backgroundImage='url("/backgrounds/tokyo-ghoul.jpg")'
        title={'Profile | ' + user.alias}
      >
        <PageContents>
          <UserIntro>
            <AvatarBox>
              <WhiteRoundSpace>
                <Avatar variant='large' imagePath={user.avatar}></Avatar>
              </WhiteRoundSpace>
              <Button to='/' variant='small'>
                <span>edit profile</span>
              </Button>
              <ButtonLogOut onClick={logout}>
                <span>log out</span>
              </ButtonLogOut>
            </AvatarBox>
            <UserInfo>
              <TitleText>{user.alias}</TitleText>
              <DateJoined>
                Joined {dayjs(user.dateJoined).format('MMMM D, YYYY')}
              </DateJoined>
              <UserBio>"{user.bio}"</UserBio>
            </UserInfo>
          </UserIntro>
          <FavoriteItems>
            <TitleText>Favorite anime</TitleText>
            <Favorites>
              {favoriteAnime.map((id, index) => (
                <Card key={index} id={id}></Card>
              ))}
            </Favorites>
          </FavoriteItems>
          <FavoriteItems>
            <TitleText>Favorite manga</TitleText>
            <Favorites>
              {favoriteManga.map((id, index) => (
                <Card key={index} id={id}></Card>
              ))}
            </Favorites>
          </FavoriteItems>
        </PageContents>
      </Layout>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

UserProfile.propTypes = {
  deauthenticate: PropTypes.func,
}
export default connect(mapStateToProps, { deauthenticate })(UserProfile)
