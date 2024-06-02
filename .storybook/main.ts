const path = require('path');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('sass'),
                  additionalData: `@import "build/scss/_variables.scss";`,
                  sassOptions: {
                    includePaths: [path.resolve(__dirname, '../node_modules')],
                  },
                },
              },
            ],
          },
        ],
      },
    },
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },

  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': path.resolve(__dirname, '../src/'),
    };
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      path.resolve(__dirname, '../node_modules'),
    ];
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              onlyCompileBundledFiles: true,
            },
          },
        ],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    );
    return config;
  },

  docs: {
    autodocs: 'tag',
  },
};
