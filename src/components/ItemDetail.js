import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

import Layout from './Layout'
import Avatar from './Avatar'

import { toggleFavorite } from '../redux/actions/index'

const PageContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemIntro = styled.div`
  width: 75vw;
  max-height: 450;
  display: flex;
  position: relative;
  margin: -80 0 40 0;
  z-index: 1;
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 80 60 0 30;
  max-height: 350;
  overflow: hidden;
`

const Title = styled.h1`
  font-family: title;
  font-size: 45;
  font-weight: 400;
  margin: 20 0 0 0;
  line-height: 1.2;
`

const SubTitle = styled.p`
  font-family: title;
  font-size: 25;
`

const Card = styled.img`
  width: 252;
  height: 400;
  border: 5px solid black;
  object-fit: cover;
  border-radius: 10px;
`

const FavoriteBox = styled.div`
  display: flex;
  align-items: center;
`

const StarSign = styled.img`
  max-height: 50;
  cursor: pointer;
`

const FavoriteText = styled.span`
  font-family: paragraph;
  font-size: 24;
  font-weight: 800;
  margin-left: 10;
`

const DescriptionBox = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
`

const DescriptionText = styled.div`
  width: 60%;
  font-family: paragraph;
  font-size: 20;
  line-height: 1.5;
  margin-top: 0;
`

const MiniReviews = styled.div`
  display: flex;
  flex-direction: column;
`

const MiniReview = styled.div`
  display: flex;
  align-items: center;
  margin: 20 0 30 0;
`

const DialogueBox = styled.div`
  width: 250;
  height: 130;
  margin-left: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const DialogueBoxImg = styled.img`
  position: absolute;
  height: inherit;
  width: inherit;
`

const MiniReviewText = styled.p`
  font-family: paragraph;
  font-style: italic;
  font-size: 20;
  margin: 0 10 0 27;
`

const FavoritedByBox = styled.div`
  margin: 100 0;
  display: flex;
  flex-direction: column;
`

const FavoritedByTitle = styled.h1`
  font-family: title;
  font-size: 30;
  font-weight: 400;
  text-align: center;
`

const AvatarsList = styled.div`
  display: flex;
`

const ItemDetail = ({
  isFavorited,
  isAuthenticated,
  toggleFavorite,
  item,
  type,
}) => {
  const handleToggleFavorite = (_id, id, itemType) => {
    if (isAuthenticated) {
      toggleFavorite(_id, id, itemType, isFavorited)
    } else {
      alert('you have not logged in yet')
    }
  }
  return (
    <Layout title={item.name + ' | Saikou'}>
      <PageContents>
        <ItemIntro>
          <Card src={item.coverUrl} />
          <ItemInfo>
            <Title>{item.name}</Title>
            <SubTitle>"{item.tagLine}"</SubTitle>
            <FavoriteBox>
              <StarSign
                onClick={() => {
                  handleToggleFavorite(item._id, item.id, type)
                }}
                src={
                  isFavorited
                    ? '/misc/IconFavorited.svg'
                    : '/misc/IconNotFavorited.svg'
                }
              />
              <FavoriteText>
                {isFavorited ? 'Favorited' : 'Not yet Favorited'}
              </FavoriteText>
            </FavoriteBox>
          </ItemInfo>
        </ItemIntro>
        <DescriptionBox>
          <DescriptionText>{ReactHtmlParser(item.description)}</DescriptionText>
          <MiniReviews></MiniReviews>
          <MiniReviews>
            <MiniReview>
              <Avatar variant='small' id={1} />
              <DialogueBox>
                <DialogueBoxImg src='/misc/DialogueBox.svg' />
                <MiniReviewText>"simply, a masterpiece"</MiniReviewText>
              </DialogueBox>
            </MiniReview>
            <MiniReview>
              <Avatar variant='small' id={12} />
              <DialogueBox>
                <DialogueBoxImg src='/misc/DialogueBox.svg' />
                <MiniReviewText>
                  “don’t make it your first anime, it’ll overshadow other anime”
                </MiniReviewText>
              </DialogueBox>
            </MiniReview>
            <MiniReview>
              <Avatar variant='small' id={4} />
              <DialogueBox>
                <DialogueBoxImg src='/misc/DialogueBox.svg' />
                <MiniReviewText>
                  “somehow I hear certain song just by seeing the cover”
                </MiniReviewText>
              </DialogueBox>
            </MiniReview>
          </MiniReviews>
        </DescriptionBox>
        <FavoritedByBox>
          <FavoritedByTitle>Favorited by</FavoritedByTitle>
          <AvatarsList>
            <Avatar id={2}></Avatar>
            <Avatar id={3}></Avatar>
            <Avatar id={4}></Avatar>
            <Avatar id={5}></Avatar>
            <Avatar id={6}></Avatar>
            <Avatar id={7}></Avatar>
          </AvatarsList>
        </FavoritedByBox>
      </PageContents>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    userFavoriteAnime: state.user.data.favoriteAnime || [],
    userFavoriteManga: state.user.data.favoriteManga || [],
    isAuthenticated: state.auth.isAuthenticated,
  }
}

ItemDetail.propTypes = {
  isFavorited: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, { toggleFavorite })(ItemDetail)
