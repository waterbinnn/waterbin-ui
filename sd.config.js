const StyleDictionary = require('style-dictionary').extend({
  source: ['tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/scss/',
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
