import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from './src/components/Button/Button';
import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" medium style={{ color: 'black' }}>
          Hello World!
        </Text>
        <Button title="Entrar" />
        <Button title="Entrar" loading />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
