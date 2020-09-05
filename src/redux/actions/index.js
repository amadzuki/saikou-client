import { authenticate, deauthenticate, register } from './auth'
import { toggleFavorite, fetchLatestData } from './user'
import { getAllAnime, getAnimeDetails } from './anime'
import { getAllManga, getMangaDetails } from './manga'
import { resetSearch, searchItems } from './search'

export {
  register,
  authenticate,
  deauthenticate,
  toggleFavorite,
  fetchLatestData,
  getAllAnime,
  getAnimeDetails,
  getAllManga,
  getMangaDetails,
  resetSearch,
  searchItems,
}
