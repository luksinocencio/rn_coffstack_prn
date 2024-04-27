import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' +
      'NA.S2ypgYrMGxka1Wa4NOY3RcAnalrp-XigFD6hXjZb9XOzM1HpT5YfNpzwDTQx',
  },
})
