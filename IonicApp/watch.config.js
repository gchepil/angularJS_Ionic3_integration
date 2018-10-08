const path = require('path');
const defaultWatcher = require('@ionic/app-scripts/config/watch.config.js');

defaultWatcher.srcFiles.paths.push(
  path.resolve('{{ROOT}}','../../shared/**/*.(ts|html|s(c|a)ss)')
);

module.exports = function () {
  return defaultWatcher;
};
