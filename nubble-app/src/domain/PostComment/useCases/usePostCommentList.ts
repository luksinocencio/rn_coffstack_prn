import { QueryKeys } from '../../../infra/infraTypes'
import { usePaginatedList } from '../../../infra/hooks/usePaginatedList'

import { postCommentService } from '../postCommentService'

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page)
  }
  return usePaginatedList([QueryKeys.PostCommentList, postId], getList)
}
