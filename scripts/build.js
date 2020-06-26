process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const { modulePath, configFilePath } = require('./paths.utils');
const { getFile, defaultOverridesConfig } = require('./helpers.utils');
const overrides = getFile(configFilePath) || defaultOverridesConfig;

const pathsPath = `${modulePath}/config/paths`;
const webpackConfigPath = `${modulePath}/config/webpack.config`;
const paths = require(pathsPath);
const webpackConfig = require(webpackConfigPath);

// override config in memory
require.cache[require.resolve(pathsPath)].exports = overrides.paths(
  paths,
  process.env.NODE_ENV
);
require.cache[require.resolve(webpackConfigPath)].exports = (env) => {
  return overrides.webpack(webpackConfig(env), process.env.NODE_ENV);
};

// run original script
require(`${modulePath}/scripts/build`);
