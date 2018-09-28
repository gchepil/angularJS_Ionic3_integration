const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const env = process.env.IONIC_ENV;

useDefaultConfig[env].resolve.extensions = ['.ts','.js'];

useDefaultConfig[env].resolve.alias = {
  '@shared': path.resolve('../shared')
};

module.exports = function () {
  return useDefaultConfig;
};