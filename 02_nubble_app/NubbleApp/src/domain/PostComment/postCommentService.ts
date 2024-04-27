import { Page } from '@types'

import { apiAdapter } from '@api'

import { postCommentAdapter } from './postCommentAdapter'
import { postCommentApi } from './postCommentApi'
import { PostComment } from './postCommentTypes'

const PER_PAGE = 10
async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  })

  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  }
}

export const postCommentService = {
  getList,
}
