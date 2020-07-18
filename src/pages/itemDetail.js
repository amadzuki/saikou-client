import React from 'react'
import styled from '@xstyled/styled-components'
import { useParams } from 'react-router-dom'

import Layout from '../components/Layout'
import Avatar from '../components/Avatar'

import items from '../data/items.json'

const PageContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemIntro = styled.div`
  width: 80vw;
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
`

const FavoriteText = styled.span`
  font-family: paragraph;
  font-size: 24;
  font-weight: 800;
  margin-left: 10;
`

const DescriptionBox = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
`

const DescriptionText = styled.p`
  width: 65%;
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
  margin-bottom: 50;
`

// const Avatar = styled.img`
//   width: 68;
//   height: 68;
//   border: 1px solid black;
//   border-radius: 50%;
//   object-fit: cover;

//   &.medium {
//     width: 114;
//     height: 114;
//     border: 3px solid black;
//     margin: 30;
//   }
// `

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

const ItemDetail = () => {
  const { id } = useParams()
  const item = items.find((item) => +item.id === +id)

  item.description = `Alchemy is bound by this Law of Equivalent Exchange — something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called "automail" and become a state alchemist, the Fullmetal Alchemist.
  
  Three years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.

  (Source: MAL Rewrite)`

  item.catchPhrase = `"In order for something to be obtained, something of equal value
              must be lost."`

  const isFavorited = true
  return (
    <Layout>
      <PageContents>
        <ItemIntro>
          <Card src={item.imageSrc} />
          <ItemInfo>
            <Title>{item.name}</Title>
            <SubTitle>{item.catchPhrase}</SubTitle>
            <FavoriteBox>
              <StarSign
                src={
                  isFavorited
                    ? '/misc/IconFavorited.svg'
                    : '/misc/IconNotFavorited.svg'
                }
              />
              <FavoriteText>
                {isFavorited
                  ? `Unfavorite this ${item.type}`
                  : `Favorite this ${item.type}`}
              </FavoriteText>
            </FavoriteBox>
          </ItemInfo>
        </ItemIntro>
        <DescriptionBox>
          <DescriptionText>{item.description}</DescriptionText>
          <MiniReviews></MiniReviews>
          <MiniReviews>
            <MiniReview>
              <Avatar variant="small" id="1" />
              <DialogueBox>
                <DialogueBoxImg src="/misc/DialogueBox.svg" />
                <MiniReviewText>"simply, a masterpiece"</MiniReviewText>
              </DialogueBox>
            </MiniReview>
            <MiniReview>
              <Avatar variant="small" id="12" />
              <DialogueBox>
                <DialogueBoxImg src="/misc/DialogueBox.svg" />
                <MiniReviewText>
                  “don’t make it your first anime, it’ll overshadow other anime”
                </MiniReviewText>
              </DialogueBox>
            </MiniReview>
            <MiniReview>
              <Avatar variant="small" id="4" />
              <DialogueBox>
                <DialogueBoxImg src="/misc/DialogueBox.svg" />
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
            <Avatar id="2"></Avatar>
            <Avatar id="3"></Avatar>
            <Avatar id="4"></Avatar>
            <Avatar id="5"></Avatar>
            <Avatar id="6"></Avatar>
            <Avatar id="7"></Avatar>
          </AvatarsList>
        </FavoritedByBox>
      </PageContents>
    </Layout>
  )
}

export default ItemDetail
