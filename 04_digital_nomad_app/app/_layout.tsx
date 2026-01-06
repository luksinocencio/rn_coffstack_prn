import 'react-native-reanimated'

import { ThemeProvider } from '@shopify/restyle'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { AuthProvider } from '@/src/domain/auth/AuthContext'
import { AlertFeedback } from '@/src/infra/feedbackService/adapters/Alert/AlertFeedback'
import { FeedbackProvider } from '@/src/infra/feedbackService/FeedbackProvider'
import { SupabaseRepositories } from '@/src/infra/repositories/adapters/supabase'
import { RepositoryProvider } from '@/src/infra/repositories/RepositoryProvider'
import { AsyncStorage } from '@/src/infra/storage/adapters/AsyncStorage'
import { StorageProvider } from '@/src/infra/storage/StorageContext'
import theme from '@/src/ui/theme/theme'

if (__DEV__) {
  require('../ReactotronConfig')
}

export default function RootLayout() {
  const [loaded] = useFonts({
    IcoMoon: require('../assets/icons/icomoon.ttf'),
    MontserratBlack: require('../assets/fonts/Montserrat-Black.ttf'),
    MontserratBlackItalic: require('../assets/fonts/Montserrat-BlackItalic.ttf'),
    MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    MontserratBoldItalic: require('../assets/fonts/Montserrat-BoldItalic.ttf'),
    MontserratExtraBold: require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    MontserratExtraBoldItalic: require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
    MontserratExtraLight: require('../assets/fonts/Montserrat-ExtraLight.ttf'),
    MontserratExtraLightItalic: require('../assets/fonts/Montserrat-ExtraLightItalic.ttf'),
    MontserratItalic: require('../assets/fonts/Montserrat-Italic.ttf'),
    MontserratLight: require('../assets/fonts/Montserrat-Light.ttf'),
    MontserratLightItalic: require('../assets/fonts/Montserrat-LightItalic.ttf'),
    MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
    MontserratMediumItalic: require('../assets/fonts/Montserrat-MediumItalic.ttf'),
    MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratSemiBoldItalic: require('../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
    MontserratThin: require('../assets/fonts/Montserrat-Thin.ttf'),
    MontserratThinItalic: require('../assets/fonts/Montserrat-ThinItalic.ttf'),
  })

  if (!loaded) {
    // Async font loading only occurs in development.
    return null
  }

  return (
    <StorageProvider storage={AsyncStorage}>
      <AuthProvider>
        <FeedbackProvider value={AlertFeedback}>
          <RepositoryProvider value={SupabaseRepositories}>
            <ThemeProvider theme={theme}>
              <Stack
                screenOptions={{
                  contentStyle: { backgroundColor: theme.colors.background },
                  headerShown: false,
                  fullScreenGestureEnabled: true,
                }}>
                <Stack.Screen name="(protected)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
                <Stack.Screen name="sign-in" />
              </Stack>
              <StatusBar style="light" />
            </ThemeProvider>
          </RepositoryProvider>
        </FeedbackProvider>
      </AuthProvider>
    </StorageProvider>
  )
}
