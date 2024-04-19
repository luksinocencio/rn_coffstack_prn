import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ route }: ScreenProps) {
  const { params } = route;

  function goBackToBegin() {}

  return (
    <Screen>
      <Icon {...params.icon} />
      <Text preset="headingLarge" mt="s24">
        {params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {' '}
        {params.description}
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao inicío" mt="s40" />
    </Screen>
  );
}
