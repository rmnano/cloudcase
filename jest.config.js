module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: ['**/?(*.)+(spec|test).js'],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,vue}',
      '!src/**/*.stories.js',
      '!src/main.js',
      '!src/stories/**',
    ],
    verbose: true,
  };
  
