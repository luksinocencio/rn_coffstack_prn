import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, SettingsScreen } from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();
export function AppStack() {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="SettingsScreen" component={SettingsScreen} />
    </Navigator>
  );
}
