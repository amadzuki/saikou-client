import axios from '../config/axios'

const fetch = axios.create({
  timeout: 1000,
})

export default fetch
