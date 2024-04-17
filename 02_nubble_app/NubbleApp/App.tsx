import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Box } from './src/components/Box/Box';
import { Button } from './src/components/Button/Button';
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

          <Box mb="s20">
            <TextInput label="E-mail" placeholder="Digite seu e-mail" />
          </Box>
          <Box mb="s20">
            <TextInput label="Senha" placeholder="Digite a sua senha" />
          </Box>
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
