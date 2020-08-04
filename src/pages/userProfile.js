import React from 'react'
import styled from '@xstyled/styled-components'
// import { useParams } from 'react-router-dom'

import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import Card from '../components/Card'

// import users from '../data/users.json'

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
const UserProfile = () => {
  const favoriteList = [2, 7, 40, 9, 27]
  return (
    <>
      <Layout
        backgroundImage='url("/backgrounds/tokyo-ghoul.jpg")'
        title='Profile | '
      >
        <PageContents>
          <UserIntro>
            <AvatarBox>
              <WhiteRoundSpace>
                <Avatar variant='large' id={1}></Avatar>
              </WhiteRoundSpace>
              <Button to='/' variant='small'>
                <span>edit profile</span>
              </Button>
            </AvatarBox>
            <UserInfo>
              <TitleText>amadzuki</TitleText>
              <DateJoined>Joined July 14, 2020</DateJoined>
              <UserBio>
                “I’m an omnivor. I watch almost all kinds of anime & manga and
                appreciate their appeal. My favorite is the one with complicated
                story with anti-hero MC.”
              </UserBio>
            </UserInfo>
          </UserIntro>
          <FavoriteItems>
            <TitleText>Favorites anime and manga</TitleText>
            <Favorites>
              {favoriteList.map((id, index) => (
                <Card key={index} id={id}></Card>
              ))}
            </Favorites>
          </FavoriteItems>
        </PageContents>
      </Layout>
    </>
  )
}

export default UserProfile
