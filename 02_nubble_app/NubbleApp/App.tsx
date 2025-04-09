import React from 'react'
import { LogBox } from 'react-native'

import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

function App(): React.JSX.Element {
  useAppColorScheme()
  const appColor = useAppColor()

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
