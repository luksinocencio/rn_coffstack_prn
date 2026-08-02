import { ColorSchemeName } from 'react-native'

export type AppColorScheme = 'light' | 'dark'

/**
 * O que o sistema pode reportar: além do `ColorSchemeName` do React Native,
 * `Appearance.getColorScheme()` pode devolver `null` ou `undefined`.
 */
export type SystemColorScheme = ColorSchemeName | null | undefined

export type ThemePreference = AppColorScheme | 'system'

export type SettingsStore = {
  appColor: AppColorScheme
  themePreference: ThemePreference
  showOnboarding: boolean
  setThemePreference: (themePreference: ThemePreference) => void
  onSystemChange: (color: SystemColorScheme) => void
  finishOnboarding: () => void
}
