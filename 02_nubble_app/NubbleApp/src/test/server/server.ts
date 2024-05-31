import { setupServer } from 'msw/node'

import { postCommentHandlers } from './PostComment/PostCommentHandlers'
import { userHandlers } from './User/userHandlers'

export const server = setupServer(...postCommentHandlers, ...userHandlers)

export { mockedData as mockedPostComment } from './PostComment/mocks'
export { userMocked } from './User/userMocked'

export { resetInMemoryResponse } from './PostComment/postCommentHandlers'
