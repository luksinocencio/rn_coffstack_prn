import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from './src/components/Button/Button';
import { Icon } from './src/components/Icon/Icon';
import { Text } from './src/components/Text/Text';
import { TextInput } from './src/components/TextInput/TextInput';
import { theme } from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ padding: 24 }}>
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
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
