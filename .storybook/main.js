const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/preset-scss',
  ],
  webpackFinal: (config) => {
    const redirectAliasPath = {
      '@components': '../src/components/',
      '@containers': '../src/containers/',
      '@pages': '../src/pages/',
      '@routes': '../src/routes/',
    };

    Object.keys(redirectAliasPath).forEach((itm) => {
      config.resolve.alias[itm] = path.resolve(
        __dirname,
        redirectAliasPath[itm]
      );
    });

    return config;
  },
};
