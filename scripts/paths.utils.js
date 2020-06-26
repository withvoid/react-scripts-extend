const fs = require('fs');
const path = require('path');

const projectDir = path.resolve(fs.realpathSync(process.cwd()));
const scriptName = 'react-scripts';
const modulePath = path.join(
  require.resolve(`${scriptName}/package.json`),
  '..'
);

module.exports = {
  modulePath,
  configFilePath: `${projectDir}/config-overrides`,
  paths: require(`${modulePath}/config/paths`);,
};
