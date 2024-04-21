import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../components/Button/Button.tsx';
import { FormTextInput } from '../../../components/Form/FormTextInput.tsx';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput.tsx';
import { Screen } from '../../../components/Screen/Screen.tsx';
import { Text } from '../../../components/Text/Text.tsx';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationReset.ts';
import { RootStackParamList } from '../../../routes/Routes.tsx';
import { REGEX_EMAIL_VALIDATION } from '../../../utils/Constants.ts';

type SignUpFormType = {
  username: string;
  fullname: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({ username, fullname, email, password }: SignUpFormType) {
    console.log(username, fullname, email, password);
    // reset({
    //   title: 'Sua conta foi criada com sucesso',
    //   description: 'Agora é so fazer login na nossa plataforma!',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        rules={{
          required: {
            value: true,
            message: 'Nome de usuário é obrigatório.',
          },
        }}
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="fullname"
        rules={{
          required: {
            value: true,
            message: 'Nome de usuário é obrigatório.',
          },
        }}
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: {
            value: true,
            message: 'E-mail é obrigatório.',
          },
          pattern: {
            value: REGEX_EMAIL_VALIDATION,
            message: 'E-mail inválido.',
          },
        }}
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
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

      <Button
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
