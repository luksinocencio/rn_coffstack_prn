module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  collectCoverageFrom: ['src/{components,utils}/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
}
