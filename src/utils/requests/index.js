import debugFetch from './debugFetch'
import register from './register'
import getToken from './getToken'
import getUserData from './getUserData'
import updateUserProfile from './updateUserProfile'
import { getAnime, getAnimeById } from './getAnime'
import { getManga, getMangaById } from './getManga'
import updateItem from './updateItem'

const requests = {
  debugFetch: debugFetch,
  register: register,
  getToken: getToken,
  getUserData: getUserData,
  updateUserProfile: updateUserProfile,
  getAnime: getAnime,
  getAnimeById: getAnimeById,
  getManga: getManga,
  getMangaById: getMangaById,
  updateItem: updateItem,
}

export default requests
