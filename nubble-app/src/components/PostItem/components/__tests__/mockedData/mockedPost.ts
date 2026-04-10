import { Post } from '@domain'

export const mockedPost: Post = {
  id: 1,
  imageURL: 'fase-url',
  commentCount: 3,
  favoriteCount: 2,
  reactionCount: 1,
  text: 'text',
  author: {
    id: 2,
    name: 'Maria Julia',
    profileURL: 'https://example.com',
    userName: 'mariajulia',
  },
  reactions: [],
}
