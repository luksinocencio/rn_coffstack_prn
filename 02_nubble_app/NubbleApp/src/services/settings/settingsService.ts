import { Appearance, ColorSchemeName } from 'react-native'

import { AppTheme, ThemePreference } from './settingsType'

function onThemePreferences(themePreference: ThemePreference): AppTheme {
  if (themePreference === 'system') {
    const colorScheme = Appearance.getColorScheme()
    return colorScheme ? colorScheme : 'light'
  }
  return themePreference
}

function onSystemChange(
  color: ColorSchemeName,
  themePreference: ThemePreference,
): AppTheme | null {
  if (themePreference === 'system') {
    return color ? color : 'light'
  }
  return null
}

export const settingsService = {
  onThemePreferences,
  onSystemChange,
}
