import debugFetch from './debugFetch'
import register from './register'
import getToken from './getToken'
import getUserData from './getUserData'
import updateUserProfile from './updateUserProfile'

const requests = {
  debugFetch: debugFetch,
  register: register,
  getToken: getToken,
  getUserData: getUserData,
  updateUserProfile: updateUserProfile,
}

export default requests
