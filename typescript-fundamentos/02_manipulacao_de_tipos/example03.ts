import { User } from './interfaces'
import { post } from './mocksData'

interface WithUser {
  user: User
}
function getAuthorName<Type extends WithUser>(value: Type): string {
  return value.user.name
}

const name = getAuthorName(post)
