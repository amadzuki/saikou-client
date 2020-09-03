import axios from '../../config/axios'

const register = async (alias, email, password) => {
  const response = await axios.post('/auth/register', {
    alias: alias,
    email: email,
    password: password,
  })
  return response.data
}

export default register
