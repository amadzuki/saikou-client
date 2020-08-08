import axios from '../config/axios'

const getUserData = async (id) => {
  const response = await axios.get(`/users/${id}`)
  return response.data.user
}

export default getUserData
