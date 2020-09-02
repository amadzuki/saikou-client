import axios from '../../config/axios'

const getAnime = async () => {
  const response = await axios.get('/anime')
  return response.data.data
}

const getAnimeById = async (id) => {
  const response = await axios.get(`/anime/${id}`)
  return response.data.data
}

export { getAnime, getAnimeById }
