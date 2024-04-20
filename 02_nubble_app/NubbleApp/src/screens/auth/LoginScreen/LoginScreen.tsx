import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { TouchableOpacityBox } from '../../../components/Box/Box';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { RootStackParamList } from '../../../routes/Routes';

/**
 * Trazer todas as rotas RootStackParamList
 * Depois coolocar o nome da rota 'LoginScreen'
 */
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

type LoginFormType = {
  email: string;
  password: string;
};

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({ email, password }: LoginFormType) {
    Alert.alert('Hello', `${email} ${'\n'} ${password}`);
  }

  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar.
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: {
            value: true,
            message: 'E-mail é obrigatório.',
          },
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'E-mail inválido.',
          },
        }}
        render={({ field, fieldState }) => (
          <TextInput
            label="E-mail"
            errorMessage={fieldState.error?.message}
            placeholder="Digite seu e-mail"
            boxProps={{ mb: 's20' }}
            value={field.value}
            onChangeText={field.onChange}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: {
            value: true,
            message: 'Senha é obrigatória.',
          },
          minLength: {
            value: 8,
            message: 'A senha deve conter no mínimo 8 caracteres.',
          },
        }}
        render={({ field, fieldState }) => (
          <PasswordInput
            label="Senha"
            errorMessage={fieldState.error?.message}
            placeholder="Digite a sua senha"
            boxProps={{ mb: 's20' }}
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />

      <TouchableOpacityBox onPress={navigateToForgotPasswordScreen}>
        <Text color="primary" preset="paragraphSmall" bold mb="s10">
          Esqueci a minha senha
        </Text>
      </TouchableOpacityBox>

      <Button
        title="Entrar"
        mt="s48"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />

      <Button
        title="Criar Conta"
        preset="outline"
        mt="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
