import { PageAPI, api } from '@api';

import { PostAPI } from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  const { data } = await api.get<PageAPI<PostAPI>>('user/post');
  return data;
}

export const postApi = {
  getList,
};
