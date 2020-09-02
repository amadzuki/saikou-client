import axios from '../../config/axios'

const updateItem = async (accessToken, type, id, body = {}) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    const response = await axios.put(`/${type}/${id}`, body)
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

export default updateItem
