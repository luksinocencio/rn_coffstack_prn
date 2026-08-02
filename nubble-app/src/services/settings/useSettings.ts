import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { settingsService } from './settingsService'
import { AppColorScheme, SettingsStore, ThemePreference } from './settingsType'

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      showOnboarding: true,
      appColor: 'light',
      themePreference: 'system',
      onSystemChange: color => {
        const updatedAppTheme = settingsService.onSystemChange(
          color,
          get().themePreference,
        )
        if (updatedAppTheme) {
          set({ appColor: updatedAppTheme })
        }
      },
      setThemePreference: newThemePreference => {
        const updatedAppTheme =
          settingsService.onChangeThemePreference(newThemePreference)
        set({ appColor: updatedAppTheme, themePreference: newThemePreference })
      },
      finishOnboarding: () => {
        set({ showOnboarding: false })
      },
    }),
    {
      name: '@Settings',
      storage: {
        getItem: async name => {
          const item = await AsyncStorage.getItem(name)
          return item ? JSON.parse(item) : null
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value))
        },
        removeItem: async name => {
          await AsyncStorage.removeItem(name)
        },
      },
    },
  ),
)

export function useAppColor(): AppColorScheme {
  return useSettingsStore(state => state.appColor)
}

export function useThemePreference(): ThemePreference {
  return useSettingsStore(state => state.themePreference)
}

export function useShowOnboarding(): boolean {
  return useSettingsStore(state => state.showOnboarding)
}

export function useSettingsService(): Pick<
  SettingsStore,
  'setThemePreference' | 'onSystemChange' | 'finishOnboarding'
> {
  const setThemePreference = useSettingsStore(state => state.setThemePreference)
  const onSystemChange = useSettingsStore(state => state.onSystemChange)

  const finishOnboarding = useSettingsStore(state => state.finishOnboarding)

  return {
    setThemePreference,
    onSystemChange,
    finishOnboarding,
  }
}
