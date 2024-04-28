import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' +
      'MQ.cpuXsKomHXtXBOGQ98aLiKeKkuF4eo67RjS5nGaahfvN7vePFSwu449J9fYh',
  },
})
