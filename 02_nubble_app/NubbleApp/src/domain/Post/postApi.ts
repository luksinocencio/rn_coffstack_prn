import { api, PageAPI } from '@api'

import { PostAPI } from './postTypes'

async function getList(): Promise<PageAPI<PostAPI>> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const { data } = await api.get<PageAPI<PostAPI>>('user/post')
  return data
}

export const postApi = {
  getList,
}
