import React from 'react'

import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { PostCommentScreen, SettingsScreen } from '@screens'

import { AppTabBottomTabParamList, AppTabNavigator } from './AppTabNavigator'

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>
  SettingsScreen: undefined
  PostCommentScreen: {
    postId: number
  }
}

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>()
export function AppStack() {
  return (
    <Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
      <Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Screen name="SettingsScreen" component={SettingsScreen} />
      <Screen name="PostCommentScreen" component={PostCommentScreen} />
    </Navigator>
  )
}
