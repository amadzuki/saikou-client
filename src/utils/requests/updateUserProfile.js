import axios from '../../config/axios'
import decodeToken from '../jsonwebtoken'

const updateUserProfile = async (accessToken, body = {}) => {
  try {
    const { _id } = decodeToken(accessToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    const response = await axios.put(`/users/${_id}/profile`, body)
    return response.data.data.user
  } catch (error) {
    console.error(error)
  }
}

export default updateUserProfile
