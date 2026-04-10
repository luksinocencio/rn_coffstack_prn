import React from 'react'
import { Alert, Pressable } from 'react-native'

import { Box } from '../../../../../components/Box/Box'
import { ProfileAvatar } from '../../../../../components/ProfileAvatar/ProfileAvatar'
import { Text } from '../../../../../components/Text/Text'
import type { PostComment } from '../../../../../domain/PostComment/postCommentTypes'
import { postCommentService } from '../../../../../domain/PostComment/postCommentService'
import { usePostCommentRemove } from '../../../../../domain/PostComment/useCases/usePostCommentRemove'
import { useToastService } from '../../../../../services/toast/useToast'

interface Props {
  postId: number
  postComment: PostComment
  userId: number | null
  postAuthorId: number
}

export function PostCommentItem({
  postId,
  postComment,
  userId,
  postAuthorId,
}: Props) {
  const { showToast } = useToastService()
  const { mutate } = usePostCommentRemove(postId, {
    onSuccess: () => {
      showToast({
        message: 'Cometário deletado',
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
    <Pressable
      testID="post-comment-id"
      disabled={!isAllowToDelete}
      onLongPress={confirmRemove}>
      <Box
        paddingHorizontal="s24"
        flexDirection="row"
        alignItems="center"
        mb="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="paragraph">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  )
}
