import { Publication, User } from './models'

const lucas: User = {
  firstName: 'Lucas',
  lastName: 'Garcez',
  email: 'lucas@coffstack.com',
}

const mateus: User = {
  firstName: 'Mateus',
  lastName: 'Silva',
  email: 'mateus_silva@gmail.com',
}

export const users: User[] = [lucas, mateus]

export const publications: Publication[] = [
  {
    imageURL: 'fake-url-1',
    description: 'description 1',
    author: lucas,
  },
  {
    imageURL: 'fake-url-2',
    description: 'description 2',
    author: mateus,
  },
  {
    imageURL: 'fake-url-3',
    description: 'description 3',
    author: lucas,
  },
]
