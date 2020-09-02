import axios from '../../config/axios'

const getManga = async () => {
  const response = await axios.get('/manga')
  return response.data.data
}

export default getManga
