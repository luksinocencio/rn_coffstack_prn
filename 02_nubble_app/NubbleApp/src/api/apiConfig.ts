import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' +
      'MQ.0AcVWWaBYrQBmuArjwb29A2n1rfeyBnq05eOlGpFFJ4IHduSPyEjtjhOQBQ9',
  },
})
