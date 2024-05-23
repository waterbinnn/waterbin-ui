const StyleDictionary = require('style-dictionary').extend({
  source: ['tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/styles/common/',
      files: [
        {
          format: 'scss/variables',
          destination: '_variables.scss',
        },
      ],
    },
  },
});

StyleDictionary.buildAllPlatforms();
