import jwtDecode from 'jwt-decode'

const decodeToken = (token) => {
  try {
    const decodedToken = jwtDecode(token)
    if (decodedToken) return decodedToken
  } catch (error) {
    console.error(error)
    return false
  }
}

export default decodeToken
