export interface User {
  firstName: string
  lastName: string
  email: string
}

export interface Publication {
  imageURL: string
  description: string
  author: User
}
