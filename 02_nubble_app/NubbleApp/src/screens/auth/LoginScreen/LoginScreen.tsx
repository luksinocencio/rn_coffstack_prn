import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { TouchableOpacityBox } from '../../../components/Box/Box';
import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { RootStackParamList } from '../../../routes/Routes';

/**
 * Trazer todas as rotas RootStackParamList
 * Depois coolocar o nome da rota 'LoginScreen'
 */
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

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

      <TouchableOpacityBox onPress={navigateToForgotPasswordScreen}>
        <Text color="primary" preset="paragraphSmall" bold mb="s10">
          Esqueci a minha senha
        </Text>
      </TouchableOpacityBox>

      <Button title="Entrar" mt="s48" />
      <Button
        title="Criar Conta"
        preset="outline"
        mt="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
