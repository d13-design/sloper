const platformBase = (output, outputPath = 'build/') => ({
  'scss': {
    'transformGroup': 'scss',
    'buildPath': outputPath,
    'files': [
      {
        'destination': `_${output}.scss`,
        'format': 'scss/variables'
      },
      {
        'destination': `_${output}-map.scss`,
        'format': 'scss/map-deep',
        'mapName': 'maps'
      }
    ]
  },
  'css': {
    'transformGroup': 'css',
    'buildPath': outputPath,
    'files': [{
      'destination': `_${output}.css`,
      'format': 'css/variables'
    }]
  },
  'js': {
    'transformGroup': 'js',
    'buildPath': outputPath,
    'files': [{
      'destination': `${output}.js`,
      'format': 'javascript/es6'
    }]
  },
  'json': {
    'transformGroup': 'js',
    'buildPath': outputPath,
    'files': [{
      'destination': `${output}.json`,
      'format': 'json/nested'
    }]
  }
});

const BaseStyleDictionary = require('style-dictionary').extend({
  source: ['properties/base/*.json', 'properties/base/*.js'],
  platforms: platformBase('base')
});

const ColorStyleDictionary = require('style-dictionary').extend({
  source: ['properties/color/*.json', 'properties/color/*.js'],
  platforms: platformBase('color')
});

BaseStyleDictionary.buildAllPlatforms();
ColorStyleDictionary.buildAllPlatforms();
