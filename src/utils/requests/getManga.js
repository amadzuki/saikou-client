import axios from '../../config/axios'

const getManga = async () => {
  const response = await axios.get('/manga')
  return response.data.data
}

const getMangaById = async (id) => {
  const response = await axios.get(`/anime/${id}`)
  return response.data.data
}

export { getManga, getMangaById }
