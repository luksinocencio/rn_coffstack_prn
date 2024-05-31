import { Page } from '@types'

import { apiAdapter } from '@api'

import { postAdapter } from './postAdapter'
import { postApi } from './postApi'
import { Post } from './postTypes'

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({ page, per_page: 10 })
  return apiAdapter.toPageModel(postPageAPI, postAdapter.toPost)
}

export const postService = {
  getList,
}
