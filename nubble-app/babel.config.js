module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // O zod v4 publica `export * as core from './core'`, sintaxe que o preset
    // do React Native não transforma sozinho (o babel-preset-expo trazia).
    '@babel/plugin-transform-export-namespace-from',
  ],
  env: {
    test: {
      // A árvore do msw (`@mswjs/interceptors`) usa static class blocks, que o
      // preset do React Native também não transforma.
      plugins: ['@babel/plugin-transform-class-static-block'],
    },
  },
}
