/** @type {import('jest').Config} */
module.exports = {
  preset: '@react-native/jest-preset',
  // O Jest concatena os `setupFiles` do preset com os daqui, então o setup do
  // React Native continua rodando antes do nosso.
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
  moduleDirectories: ['node_modules', './src/test'],
  // O ambiente do React Native ativa a condição de export "react-native", que o
  // msw mapeia para `null` — daí o "Cannot find module 'msw/node'". Limpar as
  // condições faz o resolver cair no export padrão (Node) do pacote.
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
  testTimeout: 15000,
  collectCoverageFrom: [
    'src/{components,utils,hooks,domain,screens}/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  // Estende o padrão do preset com os pacotes publicados só em ESM: as libs
  // nativas (`react-native-*`, `@react-navigation/*`) e a árvore do msw.
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-.*|@react-navigation/.*|@shopify/restyle|msw|@mswjs/.*|rettime|until-async|strict-event-emitter|@bundled-es-modules/.*|is-node-process|outvariant|headers-polyfill|@open-draft/.*)/)',
  ],
  // O transform do preset cobre só `.js/.ts/.tsx`. Alguns pacotes ESM da árvore
  // do msw (`rettime`, por exemplo) publicam só `.mjs`, então o babel-jest
  // precisa valer para `.mjs`/`.cjs`/`.jsx` também.
  transform: {
    '\\.[mc]?[jt]sx?$': 'babel-jest',
  },
}
