const VariableStyleDictionary = require('style-dictionary').extend({
  'source': ['properties/base/*.json', 'properties/base/*.js'],
  'platforms': {
    'scss': {
      'transformGroup': 'scss',
      'buildPath': 'build/',
      'files': [
        {
          'destination': '_variables.scss',
          'format': 'scss/variables'
        },
        {
          'destination': '_variables.map.scss',
          'format': 'scss/map-deep'
        }
      ]
    },
    'css': {
      'transformGroup': 'css',
      'buildPath': 'build/',
      'files': [{
        'destination': '_variables.css',
        'format': 'css/variables'
      }]
    },
    'js': {
      'transformGroup': 'js',
      'buildPath': 'build/',
      'files': [{
        'destination': 'variables.js',
        'format': 'javascript/es6'
      }]
    },
    'json': {
      'transformGroup': 'js',
      'buildPath': 'build/',
      'files': [{
        'destination': 'variables.json',
        'format': 'json/nested'
      }]
    }
  }
});

const MapStyleDictionary = require('style-dictionary').extend({
  'source': ['properties/mapped/*.json', 'properties/mapped/*.js'],
  'platforms': {
    'scss': {
      'transformGroup': 'scss',
      'buildPath': 'build/',
      'files': [
        {
          'destination': '_mapped.scss',
          'format': 'scss/map-deep',
          'mapName': 'maps'
        }
      ]
    },
    'css': {
      'transformGroup': 'css',
      'buildPath': 'build/',
      'files': [{
        'destination': '_mapped.css',
        'format': 'css/variables'
      }]
    },
    'js': {
      'transformGroup': 'js',
      'buildPath': 'build/',
      'files': [{
        'destination': 'mapped.js',
        'format': 'javascript/es6'
      }]
    },
    'json': {
      'transformGroup': 'js',
      'buildPath': 'build/',
      'files': [{
        'destination': 'mapped.json',
        'format': 'json/nested'
      }]
    }
  }
});

VariableStyleDictionary.buildAllPlatforms();
MapStyleDictionary.buildAllPlatforms();
