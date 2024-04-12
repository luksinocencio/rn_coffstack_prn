import { Company, Post, PostComment, User } from './interfaces'

export const lucas: User = {
  name: 'Lucas',
  userName: 'lucas_inocencio',
  email: 'lucas@mail.com',
}

export const vitor: User = {
  name: 'Vitor',
  userName: 'vitor_silva',
  email: 'vitor@mail.com',
}

export const post: Post = {
  title: 'Titulo do post',
  imageUrl: 'https://picsum.photos/200/200',
  user: lucas,
}

export const comment: PostComment = {
  content: 'Conteúdo do comentátio',
  likes: 5,
  user: vitor,
}

export const coffstack: Company = {
  name: 'Coffstack',
  cnpj: '12345678912345',
  website: 'https://coffstack.com',
}
