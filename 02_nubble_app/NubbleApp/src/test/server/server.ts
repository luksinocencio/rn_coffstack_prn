import { setupServer } from 'msw/node'

import { postCommentHandlers } from './PostComment/PostCommentHandlers'

export const server = setupServer(...postCommentHandlers)
