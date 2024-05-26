import React from 'react'

import { mockedPostComment } from '@test'
import { fireEvent, renderScreen, screen } from 'test-utils'

import { authCredentialsStorage } from '@services'

import { PostCommentScreen } from '../../PostCommentScreen'

describe('integration: PostCommentScreen', () => {
  it('When ADDING a comment the list is automatically updated', async () => {
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

    const comment = await screen.findByText(/comentário aleatório/i)

    expect(comment).toBeTruthy()

    // achar o campo de input
    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i)

    // digitar a mensagem
    fireEvent.changeText(inputText, 'novo comentário')

    // clicar em enviar
    fireEvent.press(screen.getByText(/enviar/i))

    //espera: a lista atualizada com o novo comentário
    const newComment = await screen.findByText(/novo comentário/i)
    expect(newComment).toBeTruthy()

    const comments = await screen.findAllByTestId('post-comment-id')

    expect(comments.length).toBe(2)
  })

  it('When DELETING a comment, the list is automatically updated and a toast message is displayer', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials)

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

    // esperar lista carregar

    // identificar o comentário que será deletado

    // long press no comentário

    // pressionar em "confirmar" no alert

    // verificar se a list for atualizada (meu comentario sumiu)

    // verificar se o toast foi exibido
  })
})
