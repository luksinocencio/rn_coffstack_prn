import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IconProps } from '@components';
import {
  ForgotPasswordScreen,
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
} from '@screens';

/**
 * undefined -> usamos mesmo que nossas rotas não precisem de parametros
 * RootStackParamList -> Mapeamos todas as rotas e seus parametros
 */

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AuthStack() {
  return (
    <Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen name="SuccessScreen" component={SuccessScreen} />
      <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    </Navigator>
  );
}
