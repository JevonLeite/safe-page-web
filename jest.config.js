const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.paths.json')

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const esModules = ['uuid', 'bootstrap'].join('|')
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
})

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '.+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$':
      'jest-transform-stub',
    '^.+\\.js$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `<rootDir>/src/tests/__mocks__/fileMock.js`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/src/tests/__mocks__/fileMock.js`,
    ...paths,
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['node_modules'],
  coverageDirectory: '<rootDir>/coverage',
}
