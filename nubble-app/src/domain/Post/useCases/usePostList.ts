import type { Post } from '../postTypes'
import { postService } from '../postService'
import { QueryKeys } from '../../../infra/infraTypes'
import { usePaginatedList } from '../../../infra/hooks/usePaginatedList'

export function usePostList() {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.getList)
}
