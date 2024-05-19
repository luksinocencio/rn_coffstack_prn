import { http } from 'msw'

import { BASE_URL, PageAPI } from '@api'
import { POST_COMMENT_PATH, PostCommentAPI } from '@domain'

import { mockedData } from './mocks'

export const postCommentHandlers = [
  http.get(`${BASE_URL}${POST_COMMENT_PATH}`, async (req, resp, ctx) => {
    const response: PageAPI<PostCommentAPI> =
      mockedData.mockedPostCommentResponse

    return resp(ctx.status(200), ctx.json(response))
  }),
]
