import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-next-router',
    'storybook-react-i18next',
    'addon-redux',
    'storybook-addon-next',
  ],
  features: {
    emotionAlias: false,
  },
  staticDirs: ['../public', '../src/assets'],
  framework: '@storybook/react',
  webpackFinal: async (config: any) => {
    config.resolve.fallback.fs = false;
    config.resolve.fallback.http = false;
    config.resolve.fallback.https = false;
    config.resolve.fallback.os = false;
    config.resolve.fallback.browser = false;
    config.resolve.fallback.stream = false;
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: any) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
      tsconfigPath: '../tsconfig.json',
    },
  },
  core: {
    builder: 'webpack5',
  },
};

export default config;
