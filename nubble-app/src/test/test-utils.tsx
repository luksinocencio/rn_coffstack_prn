import React, { ReactElement } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native'

import { Toast } from '../components/Toast/Toast'
import { AuthCredentialsProvider } from '../services/authCredentials/Providers/AuthCredentialsProviders'
import { theme } from '../theme/theme'

// O React Query v5 removeu a opção `logger`; para silenciar o console nos
// testes usa-se o próprio QueryCache/MutationCache, mas como nada aqui
// dependia disso, basta não configurar nada.
const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: Infinity,
    },
    mutations: {
      retry: false,
      gcTime: Infinity,
    },
  },
}

export const wrapAllProviders = () => {
  const queryClient = new QueryClient(queryClientConfig)

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

function customRender<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, { wrapper: wrapAllProviders(), ...options })
}

export const wrapScreenProviders = () => {
  const queryClient = new QueryClient(queryClientConfig)

  return ({ children }: { children: React.ReactNode }) => (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>{children}</NavigationContainer>
          <Toast />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  )
}

export function renderScreen<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, { wrapper: wrapScreenProviders(), ...options })
}

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) {
  return renderHook(renderCallback, {
    wrapper: wrapAllProviders(),
    ...options,
  })
}

export * from '@testing-library/react-native'
export { customRender as render, customRenderHook as renderHook }
