import React from 'react'
import { GestureResponderEvent } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import {
  PressableBox,
  PressableBoxProps,
  ProfileAvatar,
  Text,
} from '@components'
import { User } from '@domain'

type Props = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>
} & PressableBoxProps

export function ProfileUser({ user, onPress, ...pressableBoxProps }: Props) {
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
      mb="s16"
      {...pressableBoxProps}>
      <ProfileAvatar imageURL={user.profileUrl} />
      <Text ml="s12" medium preset="paragraphMedium">
        {user.username}
      </Text>
    </PressableBox>
  )
}
