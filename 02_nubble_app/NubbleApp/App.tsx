import React from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from './src/components/Toast/Toast'
import { Router } from './src/routes/Routes'
import { AuthCredentialsProvider } from './src/services/authCredentials'
import { MMKVStorage, initializeStorage } from './src/services/storage'
import { ToastProvider } from './src/services/toast'
import { theme } from './src/theme/theme'

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
