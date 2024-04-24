import { PageAPI } from '@api';

import { PostAPI } from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        'NQ.w6BlPutLOqcKoItZ-IvjELcWp2iRqSpnnCZZsmlrZpUbsgXJ7ZznI56TMJhx',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();
  console.log('FETCHED DATA', data);

  return data;
}

export const postApi = {
  getList,
};
