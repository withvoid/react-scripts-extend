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
}

const defaultOverridesConfig = {
  paths: (paths, env) => {
    return paths;
  },
  webpack: (config, env) => {
    return config;
  },
  devServer: (configFn) => (proxy, allowedHost) => {
    const config = configFn(proxy, allowedHost);
    return config;
  }
};

module.exports = { getFile, defaultOverridesConfig }
