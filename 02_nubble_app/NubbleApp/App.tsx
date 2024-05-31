import React from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from '@components'
import { Router } from '@routes'
import {
  AuthCredentialsProvider,
  MMKVStorage,
  ToastProvider,
  initializeStorage,
} from '@services'
import { theme } from '@theme'

initializeStorage(MMKVStorage)
/**
 * @tanstack/react-query -> gerenciamento de estado global de forma assincrona
 */
const queryClient = new QueryClient()

function App(): React.JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <ToastProvider>
              <Router />
              <Toast />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  )
}

export default App
