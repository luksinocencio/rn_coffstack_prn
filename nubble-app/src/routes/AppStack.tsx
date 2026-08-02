import React from 'react'

import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CameraScreen } from '../screens/app/CameraScreen/CameraScreen'
import { DarkModeScreen } from '../screens/app/DarkModeScreen/DarkModeScreen'
import { PostCommentScreen } from '../screens/app/PostCommentScreen/PostCommentScreen'
import { ProfileScreen } from '../screens/app/ProfileScreen/ProfileScreen'
import { PublishPostScreen } from '../screens/app/PublishPostScreen/PublishPostScreen'
import { SearchScreen } from '../screens/app/SearchScreen/SearchScreen'
import { SettingsScreen } from '../screens/app/SettingsScreen/SettingsScreen'

import { AppTabBottomTabParamList, AppTabNavigator } from './AppTabNavigator'

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>
  SettingsScreen: undefined
  DarkModeScreen: undefined
  SearchScreen: undefined
  PostCommentScreen: {
    postId: number
    postAuthorId: number
    showPost?: boolean
  }
  ProfileScreen: {
    userId: number
  }
  PublishPostScreen: {
    imageUri: string
  }
  CameraScreen: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

interface Props {
  initialRouteName?: keyof AppStackParamList
}

export function AppStack({ initialRouteName = 'AppTabNavigator' }: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="DarkModeScreen" component={DarkModeScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PublishPostScreen" component={PublishPostScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  )
}
