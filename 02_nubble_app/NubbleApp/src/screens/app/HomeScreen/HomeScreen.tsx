import React from 'react';

import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function HomeScreen({ navigation }: AppScreenProps<'HomeScreen'>) {
  function navigateToSettingsScreen() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button title="Settings" onPress={navigateToSettingsScreen} />
    </Screen>
  );
}
