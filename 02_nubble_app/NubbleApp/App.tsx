import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from './src/components/Button/Button';
import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 10 }}>
          <Text preset="headingLarge" medium>
            Hello World!
          </Text>
          <Button title="Entrar" />

          <Button title="Entrar" loading marginTop="s10" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
