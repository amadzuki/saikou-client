import {
  SET_USER,
  RESET_USER,
  SET_FAVORITE_ANIME,
  SET_FAVORITE_MANGA,
  SET_UNFAVORITE_ANIME,
  SET_UNFAVORITE_MANGA,
} from '../actions/types'

const initialState = {
  id: 0,
  alias: '',
  avatar: '',
  dateJoined: '',
  bio: '',
  favoriteAnime: [],
  favoriteManga: [],
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const {
        id,
        alias,
        avatar,
        createdAt,
        bio,
        favoriteAnime,
        favoriteManga,
      } = action.payload
      return {
        ...state,
        id: id,
        alias: alias,
        avatar: avatar,
        dateJoined: createdAt,
        bio: bio,
        favoriteAnime: favoriteAnime,
        favoriteManga: favoriteManga,
      }

    case RESET_USER:
      return {
        ...state,
        id: 0,
        alias: '',
        avatar: '',
        dateJoined: '',
        bio: '',
        favoriteAnime: [],
        favoriteManga: [],
      }

    case SET_FAVORITE_ANIME:
      const newFavoritedAnime = +action.payload.id
      return {
        ...state,
        favoriteAnime: [...state.favoriteAnime, newFavoritedAnime],
      }

    case SET_UNFAVORITE_ANIME:
      const unfavoriteAnimeId = +action.payload.id
      const newFavoriteAnimeArray = state.favoriteAnime.filter(
        (id) => id !== unfavoriteAnimeId
      )
      return {
        ...state,
        favoriteAnime: newFavoriteAnimeArray,
      }

    case SET_FAVORITE_MANGA:
      const newFavoritedManga = +action.payload.id
      return {
        ...state,
        favoriteManga: [...state.favoriteManga, newFavoritedManga],
      }

    case SET_UNFAVORITE_MANGA:
      const unfavoriteMangaId = +action.payload.id
      const newFavoriteMangaArray = state.favoriteManga.filter(
        (id) => id !== unfavoriteMangaId
      )
      return {
        ...state,
        favoriteManga: newFavoriteMangaArray,
      }
    default:
      return state
  }
}

export default user
