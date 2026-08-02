module.exports = {
  name: 'Nomad',
  slug: 'digital-nomad-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'digitalnomadapp',
  userInterfaceStyle: 'automatic',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.devmeister.digitalnomadapp',
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#1B1B1B',
    },
    package: 'com.devmeister.digitalnomadapp',
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#1B1B1B',
      },
    ],
    'expo-sqlite',
    'expo-web-browser',
    'expo-font',
    'expo-image',
    'expo-status-bar',
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {},
    eas: {
      projectId: 'eeb1cff3-fe84-431f-b4f6-c068205bc3ec',
    },
  },
}
