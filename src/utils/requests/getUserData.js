import axios from '../../config/axios'
import decodeToken from '../jsonwebtoken'

const getUserData = async (accessToken) => {
  try {
    const { _id } = decodeToken(accessToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    const response = await axios.get(`/users/${_id}/profile`)
    console.log(response.data.data)
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

export default getUserData
