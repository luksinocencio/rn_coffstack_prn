import { Appearance, ColorSchemeName, Platform, StatusBar } from 'react-native'

import BootSplash from 'react-native-bootsplash'

import { colors } from '../../theme/colors'

import {
  AppColorScheme,
  SystemColorScheme,
  ThemePreference,
} from './settingsType'

/**
 * O `ColorSchemeName` do React Native é `'light' | 'dark' | 'unspecified'` e o
 * `Appearance.getColorScheme()` ainda pode devolver `null`/`undefined`. O app
 * só conhece claro e escuro, então tudo que não for `dark` vira `light`.
 */
function toAppColorScheme(color: SystemColorScheme): AppColorScheme {
  return color === 'dark' ? 'dark' : 'light'
}

function onChangeThemePreference(
  themePreference: ThemePreference,
): AppColorScheme {
  if (themePreference === 'system') {
    return toAppColorScheme(Appearance.getColorScheme())
  }

  return themePreference
}

function onSystemChange(
  color: SystemColorScheme,
  themePreference: ThemePreference,
): AppColorScheme | null {
  if (themePreference === 'system') {
    return toAppColorScheme(color)
  }
  return null
}

function handleStatusBar(appColor: AppColorScheme) {
  StatusBar.setBarStyle(
    appColor === 'dark' ? 'light-content' : 'dark-content',
    true,
  )

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(
      appColor === 'dark' ? colors.palette.grayBlack : colors.palette.grayWhite,
    )
  }
}

async function hideSplashScreen() {
  try {
    await BootSplash.hide({ fade: true })
  } catch {}
}

export const settingsService = {
  onChangeThemePreference,
  onSystemChange,
  handleStatusBar,
  hideSplashScreen,
}
