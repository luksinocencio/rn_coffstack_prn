import React from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from './src/components'
import { Router } from './src/routes'
import {
  AuthCredentialsProvider,
  initializeStorage,
  MMKVStorage,
  ToastProvider,
} from './src/services'
import { theme } from './src/theme'

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
