import { User } from './interfaces'
import { lucas, vitor } from './mocksData'

interface Page<Data> {
  data: Data[]
  count: number
  nextPage: number | null
  previousPage: number | null
}

function getUserList(): Page<User> {
  return {
    count: 5,
    data: [lucas, vitor],
    nextPage: 2,
    previousPage: null,
  }
}

const users = getUserList()
console.log(users.data[0])
