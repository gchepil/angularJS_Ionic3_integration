/**
 * This file serve to watch 'src/' folder.
 * Copy and compile file from this folder and placed in 'lib/' folder.
 * After compile files copy to 'packagePaths' and reload react native app
 * Run watcher 'npm start'
 */

var npm = require("npm");
var fs = require("fs-extra");
var chokidar = require("chokidar");

var packagePaths = [
  "../rnApp/node_modules/shared-package/lib",
];

var noop = () => {};

var watcher = chokidar.watch("./src", {
  persistent: true
});

watcher
  .on("ready", onReady)
  .on("change", runCompileAndMoveFiles)
  .on("unlink", onDelete);

function onReady() {
  // only after "ready" should we subscribe to "add" events
  // if we do it before "ready", each file in the project will
  // trigger an "add" event
  watcher.on("add", runCompileAndMoveFiles);
  runCompileAndMoveFiles();
}

function onDelete(filePath) {
  // if src/foo/bar.js is deleted, also delete lib/foo/bar.js
  var fileWithoutSrc = stripFirstDirectory(filePath);

  fs.removeSync(`./lib/${fileWithoutSrc}`, noop);
  runCompileAndMoveFiles();
}

function runCompileAndMoveFiles() {
  var options = { clobber: true }; //overwrite directory

  try {
    npm.load({}, function (err) {
      // run our "compile" script, defined in our package.json

      // this script uses babel to read our ES6 src/ 
      // directory and output our ES5 lib/ directory
      npm.commands.run(["compile"], function (err, data) {
        packagePaths.forEach((path) => {
          console.log(path, options);
          fs.copy("./lib", path, options, noop);
        })
      });
    });
  } catch (e) {
    console.log(e);
  }
}

function stripFirstDirectory(filePath) {
  // turn src/foo/bar.js into foo/bar.js
  return filePath.split("/").splice(1, filePath.length - 1).join("/");
}