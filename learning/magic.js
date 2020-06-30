const path = require('path');

/**
 * Get library root path
 */
const libPath = path.join(
  require.resolve('./lib'), '..'
);
// console.log('lib path is', libPath);

/**
 * 1- Get absolute path of the file to change
 * 2- Import the file that you want to modify
 */
const filePath = `${libPath}/fileToChangeByCache`;
const file = require(filePath);

// console.log('file', file);

/**
 * override file in memory
 */
// console.log(require.cache); // see all files cached
// console.log(require.cache[filePath + '.js']); // not best way to get this file


// console.log(require.cache[require.resolve(filePath)]); // right way
// return;

require.cache[require.resolve(filePath)].exports = {
  message: 'HACKED',
  say: () => 'YOU HAVE BEEN HACKED',
};

// run the original script
require(`${libPath}/index`);