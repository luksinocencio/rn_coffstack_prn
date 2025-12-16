module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@api': './src/api',
          '@brand': './src/brand',
          '@components': './src/components',
          '@domain': './src/domain',
          '@hooks': './src/hooks',
          '@infra': './src/infra',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@types': './src/types',
          '@utils': './src/utils',
          '@services': './src/services',
          '@test': './src/test',
          '@assets': './src/assets',
        },
      },
    ],
  ],
}
