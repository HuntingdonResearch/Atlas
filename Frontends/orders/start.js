const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/start.js');
const webpackConfig = require('react-scripts/config/webpack.config');

const {
  webpackConfig: {
    externals
  }
} = require('./package.json');

defaults.__set__('configFactory', (webpackEnv) => {
  const config = webpackConfig(webpackEnv);

  config.externals = externals;

  return config;
});
