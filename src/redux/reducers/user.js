import {
  SET_USER,
  RESET_USER,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  SET_FAVORITE_ANIME,
  SET_FAVORITE_MANGA,
  SET_UNFAVORITE_ANIME,
  SET_UNFAVORITE_MANGA,
} from '../actions/types'

const initialState = {
  isLoading: false,
  error: null,
  data: {
    email: '',
    alias: '',
    avatar: '',
    bio: '',
    createdAt: '',
    id: 0,
    favoriteAnime: [],
    favoriteManga: [],
  },
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.payload,
      }

    case RESET_USER:
      return {
        ...initialState,
      }

    case UPDATE_USER_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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
