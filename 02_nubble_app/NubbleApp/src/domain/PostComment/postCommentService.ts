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

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message)
  return postCommentAdapter.toPostComment(postCommentAPI)
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId)
  return response.message
}

/**
 * @description user podera remover o comentario se ele for o autor do comentario ou se ele for o autor do post
 * @param userId id do usuario logado
 * @param postComment id do usuario que fez o comentario
 * @param postAuthorId o id do autor do post
 */
function isAllowToDelete(
  postComment: PostComment,
  userId: number,
  postAuthorId: number,
): boolean {
  if (postComment.author.id === userId) {
    return true
  }

  if (postAuthorId === userId) {
    return true
  }

  return false
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
}
