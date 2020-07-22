import axios from 'axios'

const fetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL || `http://localhost:3000`,
  timeout: 1000,
})

export default fetch
