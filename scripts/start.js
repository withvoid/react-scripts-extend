const { nodeEnv, scriptName, configFilePath, paths } = require('./paths.utils');
const { getFile, defaultOverridesConfig } = require('./helpers.utils');
const overrides = getFile(configFilePath) || defaultOverridesConfig;

// react-scripts files
const pathsPath = `${scriptName}/config/paths`;
const webpackConfigPath = `${scriptName}/config/webpack.config`;
const devServerConfigPath = `${scriptName}/config/webpackDevServer.config`;
const webpackConfig = require(webpackConfigPath);
const devServerConfig = require(devServerConfigPath);

// override config in memory
require.cache[require.resolve(pathsPath)].exports = overrides.paths(
  paths,
  nodeEnv
);
require.cache[require.resolve(webpackConfigPath)].exports = overrides.webpack(
  webpackConfig,
  nodeEnv
);
require.cache[require.resolve(devServerConfigPath)].exports = overrides.devServer(
  devServerConfig,
  nodeEnv
);

// run original script
require(`${scriptName}/scripts/start`);