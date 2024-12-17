import React, { useEffect } from 'react'
import { LogBox } from 'react-native'

import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'

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
import { useFonts } from 'expo-font'

initializeStorage(MMKVStorage)

const queryClient = new QueryClient()

LogBox.ignoreLogs(['Require cycle:'])

function App() {
  useAppColorScheme()
  const appColor = useAppColor()

  const [loaded, error] = useFonts({
    'Satoshi-Black': require('./assets/fonts/Satoshi-Black.otf'),
    'Satoshi-BlackItalic': require('./assets/fonts/Satoshi-BlackItalic.otf'),
    'Satoshi-Bold': require('./assets/fonts/Satoshi-Bold.otf'),
    'Satoshi-Italic': require('./assets/fonts/Satoshi-Italic.otf'),
    'Satoshi-Light': require('./assets/fonts/Satoshi-Light.otf'),
    'Satoshi-BoldItalic': require('./assets/fonts/Satoshi-BoldItalic.otf'),
    'Satoshi-LightItalic': require('./assets/fonts/Satoshi-LightItalic.otf'),
    'Satoshi-Medium': require('./assets/fonts/Satoshi-Medium.otf'),
    'Satoshi-MediumItalic': require('./assets/fonts/Satoshi-MediumItalic.otf'),
    'Satoshi-Regular': require('./assets/fonts/Satoshi-Regular.otf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

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
