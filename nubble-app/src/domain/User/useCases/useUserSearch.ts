import { userService } from '../userService'
import { QueryKeys } from '../../../infra/infraTypes'
import { usePaginatedList } from '../../../infra/hooks/usePaginatedList'

export function useUserSearch(search: string) {
  return usePaginatedList(
    [QueryKeys.UserList, search],
    () => userService.searchUser(search),
    {
      enabled: search.length > 0,
      staleTime: 30000,
    },
  )
}
