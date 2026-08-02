import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import type { IconProps } from '../components/Icon/Icon'
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen'
import { SignInScreen } from '../screens/auth/SignInScreen/SignInScreen'
import { SignUpScreen } from '../screens/auth/SignUpScreen/SignUpScreen'
import { SuccessScreen } from '../screens/auth/SuccessScreen/SuccessScreen'

/**
 * undefined -> usamos mesmo que nossas rotas não precisem de parametros
 * AuthStackParamList -> Mapeamos todas as rotas e seus parametros para essa stack
 */

export type AuthStackParamList = {
  SignInScreen: undefined
  SignUpScreen: undefined
  SuccessScreen: {
    title: string
    description: string
    icon: Pick<IconProps, 'name' | 'color' | 'fillColor'>
  }
  ForgotPasswordScreen: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>()

export function AuthStack() {
  return (
    <Navigator
      initialRouteName="SignInScreen"
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
      <Screen name="SignInScreen" component={SignInScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen name="SuccessScreen" component={SuccessScreen} />
      <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    </Navigator>
  )
}
