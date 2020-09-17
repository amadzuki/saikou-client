import React, { useEffect } from 'react'
import styled, { Box } from '@xstyled/styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

import { Layout, Avatar, Button, Tag } from '../components'

import { CardContainer } from '../containers'

import items from '../data/items.json'

import { deauthenticate, fetchLatestData } from '../redux/actions'

const PageContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30;
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
  width: 143;
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
const ItemsBlock = styled.div`
  width: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30 0;
`
const Favorites = styled.div`
  margin-top: 20;
  display: flex;
  flex-wrap: wrap;
`
const AnimeTitle = styled.h3`
  margin: 20 0;
  font-family: title;
  font-weight: 400;
  font-size: 20;
`
const RatingText = styled.p`
  font-family: annotation;
  font-size: 20;
  margin: 0;
`
const ReviewText = styled.p`
  font-family: paragraph;
  font-size: 18;
`
const FullReviewLink = styled(Link)`
  color: secondary;
  text-decoration: none;
`
const OverlayBox = styled.div`
  display: flex;
  margin-left: 90px;
`
const OverlayImage = styled.img`
  width: 172;
  height: 240;
  margin-left: -90px;
  border: 3px solid white;
`
const ListDescriptionBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding-left: 30;
`
const ListTitle = styled.h2`
  font-family: title;
  font-weight: 400;
  font-size: 22;
`

const UserProfile = ({
  deauthenticate,
  fetchLatestData,
  accessToken,
  user,
  isLoading,
}) => {
  useEffect(() => {
    fetchLatestData(accessToken)
  }, [fetchLatestData, accessToken])

  const logout = () => {
    deauthenticate()
  }
  const customList = [10, 12, 13, 14, 19]
  const imagePaths = customList.map(
    (id) => items.find((item) => item.id === id).coverSrc
  )
  return (
    <>
      {isLoading && <h1>now loading</h1>}
      {!isLoading && user && user.length !== 0 && (
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
                  Joined {dayjs(user.createdAt).format('MMMM D, YYYY')}
                </DateJoined>
                <UserBio>"{user.bio}"</UserBio>
              </UserInfo>
            </UserIntro>
            <ItemsBlock>
              <TitleText>My Favorite Anime</TitleText>
              <Favorites>
                {user.favoriteAnime.map((item, index) => (
                  <CardContainer key={index} id={item.id} type='anime' />
                ))}
              </Favorites>
            </ItemsBlock>
            <ItemsBlock>
              <TitleText>My Favorite Manga</TitleText>
              <Favorites>
                {user.favoriteManga.map((item, index) => (
                  <CardContainer key={index} id={item.id} type='manga' />
                ))}
              </Favorites>
            </ItemsBlock>
            <ItemsBlock>
              <TitleText>My Review</TitleText>
              <Box>
                <Box row>
                  <Box col>
                    <CardContainer id={19} type='anime' hideName />
                  </Box>
                  <Box col={3 / 4}>
                    <Box row>
                      <AnimeTitle>Black Clover</AnimeTitle>
                    </Box>
                    <Box row>
                      <Box col={4 / 5}>
                        <Tag type='anime' />
                      </Box>
                      <Box col>
                        <RatingText>overall rating: 10/10</RatingText>
                      </Box>
                    </Box>
                    <Box row>
                      <ReviewText>
                        We used to have Big 3 when it comes to anime including
                        shows like Naruto, One piece, and Bleach. Throw
                        Fairytail in there also. Now as those shows are going
                        away we look to replace them and this show was supposed
                        to be one of those shows hyped to the point it crashed
                        streaming websites when it released. The thing is all
                        this show has are the bad parts of the Big 3. The story
                        also wants to be compared to them and since it is I'm
                        going to compare them here.
                      </ReviewText>
                      <ReviewText>
                        The story is about a boy who can't use magic but through
                        some stroke{' '}
                        <FullReviewLink to='/'>read more...</FullReviewLink>
                      </ReviewText>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ItemsBlock>
            <ItemsBlock>
              <TitleText>My Custom List</TitleText>
              <Box row>
                <Box col>
                  <OverlayBox>
                    {imagePaths.map((path, index) => (
                      <OverlayImage src={path} key={index} />
                    ))}
                  </OverlayBox>
                </Box>
                <Box col>
                  <ListDescriptionBox>
                    <ListTitle>Complete Healthy Anime Mix</ListTitle>
                    <ReviewText>
                      All about youth in different genres without ecchi
                      whatsoever
                    </ReviewText>
                  </ListDescriptionBox>
                </Box>
              </Box>
            </ItemsBlock>
          </PageContents>
        </Layout>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    user: state.user.data,
    accessToken: state.auth.data.accessToken,
  }
}

UserProfile.propTypes = {
  deauthenticate: PropTypes.func,
  fetchLatestData: PropTypes.func,
}

export default connect(mapStateToProps, { deauthenticate, fetchLatestData })(
  UserProfile
)
