import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://655f52e6879575426b4518aa.mockapi.io',
  timeout: 1200
})
