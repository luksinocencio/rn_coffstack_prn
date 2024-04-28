import React from 'react'
import { Alert, Pressable } from 'react-native'

import { Box, ProfileAvatar, Text } from '@components'
import { PostComment, postCommentService, usePostCommentRemove } from '@domain'
import { useToastService } from '@services'

interface Props {
  postComment: PostComment
  userId: number
  postAuthorId: number
  onRemoveComment: () => void
}
export function PostCommentItem({
  postComment,
  onRemoveComment,
  userId,
  postAuthorId,
}: Props) {
  const { showToast } = useToastService()
  const { mutate } = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment()
      showToast({
        message: 'Cometário deletado',
        duration: 3000,
        position: 'bottom',
      })
    },
  })

  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  )

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({ postCommentId: postComment.id }),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ])
  }

  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  )
}
