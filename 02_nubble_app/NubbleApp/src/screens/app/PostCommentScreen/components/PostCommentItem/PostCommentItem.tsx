import React from 'react'
import { Alert, Pressable } from 'react-native'

import { Box, ProfileAvatar, Text } from '@components'
import { PostComment, postCommentService, usePostCommentRemove } from '@domain'

interface PostCommentItemProps {
  postComment: PostComment
  userId: number
  postAuthorId: number
  onRemoveComment: () => void
}

export function PostCommentItem({
  postComment,
  userId,
  postAuthorId,
  onRemoveComment,
}: PostCommentItemProps) {
  const { mutate } = usePostCommentRemove({
    onSuccess: onRemoveComment,
  })
  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  )

  function confirmRemove() {
    Alert.alert(
      'Deseja excluir este comentário?',
      'Você tem certeza que deseja excluir este comentário?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          style: 'destructive',
          onPress: () => mutate({ postCommentId: postComment.id }),
        },
      ],
    )
  }

  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
      <Box flexDirection="row" mb="s16" alignItems="center">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text color="gray1" preset="paragraphSmall">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  )
}
