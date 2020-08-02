import axios from '../config/axios'

const getToken = async (email, password) => {
  const response = await axios.post('/auth/login', {
    email: email,
    password: password,
  })
  return response.data
}

export default getToken
