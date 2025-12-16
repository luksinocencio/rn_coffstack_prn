import React from 'react'
import { LogBox } from 'react-native'

import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from '@components'
import { useAppColorScheme } from '@hooks'
import { Router } from '@routes'
import {
  AuthCredentialsProvider,
  initializeStorage,
  MMKVStorage,
  useAppColor,
} from '@services'
import { darkTheme, theme } from '@theme'

initializeStorage(MMKVStorage)

const queryClient = new QueryClient()

LogBox.ignoreLogs(['Require cycle:'])

function App() {
  useAppColorScheme()
  const appColor = useAppColor()

  const [loaded, error] = useFonts({
    'Satoshi-Black': require('./src/assets/fonts/Satoshi-Black.otf'),
    'Satoshi-BlackItalic': require('./src/assets/fonts/Satoshi-BlackItalic.otf'),
    'Satoshi-Bold': require('./src/assets/fonts/Satoshi-Bold.otf'),
    'Satoshi-BoldItalic': require('./src/assets/fonts/Satoshi-BoldItalic.otf'),
    'Satoshi-Italic': require('./src/assets/fonts/Satoshi-Italic.otf'),
    'Satoshi-Light': require('./src/assets/fonts/Satoshi-LightItalic.otf'),
    'Satoshi-LightItalic': require('./src/assets/fonts/Satoshi-LightItalic.otf'),
    'Satoshi-Medium': require('./src/assets/fonts/Satoshi-Medium.otf'),
    'Satoshi-MediumItalic': require('./src/assets/fonts/Satoshi-MediumItalic.otf'),
    'Satoshi-Regular': require('./src/assets/fonts/Satoshi-Regular.otf'),
  })

  if (!loaded && !error) {
    return null
  }

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
            {/* Only use ToastProvider if it is using Context implementation.
          Zustand implementation doesn't need a provider */}
            {/* <ToastProvider> */}
            <Router />
            <Toast />
            {/* </ToastProvider> */}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  )
}

export default App
