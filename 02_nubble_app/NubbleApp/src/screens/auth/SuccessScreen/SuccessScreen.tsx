import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';

export function SuccessScreen() {
  function goBackToBegin() {}

  return (
    <Screen>
      <Icon name="bellOn" />
      <Text preset="headingLarge" mt="s24">
        Title
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {' '}
        Description
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao inicío" mt="s40" />
    </Screen>
  );
}
