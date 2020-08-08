import axios from '../../config/axios'

const getUserData = async (accessToken) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    const response = await axios.get('/users/profile')

    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

export default getUserData
