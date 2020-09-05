import axios from '../../config/axios'

const searchItems = async (query) => {
  const response = await axios.get(`/search${query}`)
  return response.data.data
}

export default searchItems
