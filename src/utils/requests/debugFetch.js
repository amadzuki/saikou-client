import axios from '../../config/axios'

const debugFetch = axios.create({
  timeout: 1000,
})

export default debugFetch
