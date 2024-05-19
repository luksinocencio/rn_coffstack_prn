import React from 'react'

import { renderScreen, screen } from 'test-utils'

import { PostCommentScreen } from '../../PostCommentScreen'

describe('integration: PostCommentScreen', () => {
  it('When ADDING a comment the list is automatically updated', () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    )

    const comment = screen.findByText(/comentário aleatório./i)

    expect(comment).toBeTruthy()
  })
})
