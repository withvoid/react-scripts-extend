process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  nodeEnv,
  scriptName: 'react-scripts',
  configFilePath: './config-extends',
  paths: require(`react-scripts/config/paths`)
}