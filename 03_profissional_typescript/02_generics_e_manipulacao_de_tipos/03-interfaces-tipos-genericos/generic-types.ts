import { publications, users } from './data'
import { Publication, User } from './models'

// type Page<DataType> = {
interface Page<DataType> {
  total: number
  perPage: number
  currentPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  data: DataType[]
}

// User
function getUserList(page: number): Page<User> {
  return {
    total: 10,
    perPage: 5,
    currentPage: page,
    hasNextPage: true,
    hasPreviousPage: false,
    data: users,
  }
}
const userList = getUserList(1)
console.log(userList.data)

// Publication
function getPublicationList(page: number): Page<Publication> {
  return {
    total: 10,
    perPage: 5,
    currentPage: page,
    hasNextPage: true,
    hasPreviousPage: false,
    data: publications,
  }
}

const publicationList = getPublicationList(1)
publicationList.data[0].author.firstName
console.log(publicationList.data)
