import theme from '@/src/ui/theme/theme'
import { ThemeProvider } from '@shopify/restyle'
import { render, RenderOptions } from '@testing-library/react-native'
import { PropsWithChildren, ReactElement } from 'react'

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const renderComponent = (component: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(component, { wrapper: AllTheProviders, ...options })
