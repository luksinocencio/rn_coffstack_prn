import { api, PageAPI, PageParams } from '@api'

import { PostAPI } from './postTypes'

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  // await new Promise(resolve => setTimeout(resolve, 1000))
  const { data } = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  })

  return data
}

export const postApi = {
  getList,
}
