import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' +
      'MQ.rAxlsz7fXf_SYEbqxb-5BbVn0D_ZEetGr4T9wYWGyNlQeTNeGwCkIOS_6XuO',
  },
})
