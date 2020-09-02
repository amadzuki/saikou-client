import axios from '../../config/axios'

const getAnime = async () => {
  const response = await axios.get('/anime')
  return response.data.data
}

export default getAnime
