import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';

export function LoginScreen() {
  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar.
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <TextInput
        label="Senha"
        placeholder="Digite a sua senha"
        secureTextEntry
        RightComponent={<Icon name="eyeOn" color="gray2" />}
        boxProps={{ mb: 's20' }}
      />

      <Text color="primary" preset="paragraphSmall" bold mb="s10">
        Esqueci a minha senha
      </Text>

      <Button title="Entrar" mt="s48" />
      <Button title="Criar Conta" preset="outline" mt="s12" />
    </Screen>
  );
}
