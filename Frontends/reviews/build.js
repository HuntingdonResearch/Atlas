const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');

const {
  webpackConfig: {
    externals
  }
} = require('./package.json');

const config = defaults.__get__('config');

config.externals = externals;
