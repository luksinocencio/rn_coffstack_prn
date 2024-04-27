import React, { useState } from 'react'
import { Keyboard } from 'react-native'

import { TextMessage } from '@components'
import { usePostCommentCreate } from '@domain'

export type PostCommentTextMessageProps = {
  postId: number
  onAddComment: () => void
}

export default function PostCommentTextMessage({
  postId,
  onAddComment,
}: PostCommentTextMessageProps) {
  const [message, setMessage] = useState('')
  const { createComment } = usePostCommentCreate(postId, {
    onSuccess: () => {
      onAddComment()
      setMessage('')
      Keyboard.dismiss()
    },
  })

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={createComment}
      value={message}
      onChangeText={setMessage}
    />
  )
}
