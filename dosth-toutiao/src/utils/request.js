import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:7003'
})

export default request
