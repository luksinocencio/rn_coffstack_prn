import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen } from '../screens/auth/LoginScreen/LoginScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen/SignUpScreen';

/**
 * undefined -> usamos mesmo que nossas rotas não precisem de parametros
 * RootStackParamList -> Mapeamos todas as rotas e seus parametros
 */

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  // SuccessScreen: icon, title, description
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SignUpScreen" component={SignUpScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
