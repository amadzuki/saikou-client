import axios from '../../config/axios'

const register = async (email, password) => {
  const response = await axios.post('/auth/register', {
    email: email,
    password: password,
  })
  return response.data
}

export default register
