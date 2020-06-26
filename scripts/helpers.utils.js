const fs = require('fs');
const path = require('path');

const getFile = (file) => {
  try {
    const configPath = path.resolve(process.cwd(), file);
    console.log(configPath);
    const result = require(configPath);
    return result;
  } catch (error) {
    return false;
  }
};

const defaultOverridesConfig = {
  paths: (paths, env) => paths,
  webpack: (config, env) => config,
  devServer: (configFn) => (proxy, allowedHost) => configFn(proxy, allowedHost),
};

module.exports = { getFile, defaultOverridesConfig };
