import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' +
      'NQ.w6BlPutLOqcKoItZ-IvjELcWp2iRqSpnnCZZsmlrZpUbsgXJ7ZznI56TMJhx',
  },
});
