import React, { useState } from 'react'
import { Keyboard } from 'react-native'

import { TextMessage } from '@components'
import { usePostCommentCreate } from '@domain'

export type PostCommentTextMessageProps = {
  postId: number
}

export default function PostCommentTextMessage({
  postId,
}: PostCommentTextMessageProps) {
  const { createComment } = usePostCommentCreate(postId)
  const [message, setMessage] = useState('')

  function onPressSend() {
    createComment(message)
    setMessage('')
    Keyboard.dismiss()
  }

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={onPressSend}
      value={message}
      onChangeText={setMessage}
    />
  )
}
