import React, { ReactElement } from 'react'
import { GestureResponderEvent } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import {
  Box,
  PressableBox,
  PressableBoxProps,
  ProfileAvatar,
  ProfileAvatarProps,
  Text,
} from '@components'
import { User } from '@domain'

type Props = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageURL'>
  RightComponent?: ReactElement
} & PressableBoxProps

export function ProfileUser({
  user,
  onPress,
  avatarProps,
  RightComponent,
  ...pressableBoxProps
}: Props) {
  const navigation = useNavigation()

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event)
    }
    navigation.navigate('ProfileScreen', {
      userId: user.id,
    })
  }

  return (
    <PressableBox
      onPress={handleOnPress}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s16"
      {...pressableBoxProps}>
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar {...avatarProps} imageURL={user.profileUrl} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {user.username}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  )
}
