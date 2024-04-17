import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from './src/components/Button/Button';
import { Icon } from './src/components/Icon/Icon';
import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 10 }}>
          <Text preset="headingLarge">Coffstack</Text>
          <Button title="Entrar" />
          <Button title="Entrar" loading marginTop="s10" />
          <Button title="Entrar" marginTop="s10" disabled />
          <Button title="Outline" preset="outline" marginTop="s10" />
          <Button title="Outline" preset="outline" marginTop="s10" disabled />
          <Button title="Outline" preset="outline" marginTop="s10" loading />
          <Box flexDirection="row">
            <Icon name="eyeOn" color="primary" size={20} />
            <Icon name="eyeOff" color="primary" size={20} />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
