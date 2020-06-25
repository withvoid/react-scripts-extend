#!/usr/bin/env;
const spawn = require('react-dev-utils/crossSpawn');
const chalk = require('react-dev-utils/chalk');
const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
  (x) => x === 'build' || x === 'start' || x === 'test' || x === 'eject'
);
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

switch (script) {
  case 'build':
  case 'start': {
    const result = spawn.sync(
      'node',
      nodeArgs
        .concat(require.resolve(`../scripts/${script}`))
        .concat(args.slice(scriptIndex + 1)),
      { stdio: 'inherit' }
    );

    if (result.signal) {
      if (result.signal === 'SIGKILL') {
        console.log('The build failed because the process exited too early.');
        console.log(
          'This probably means the system ran out of memory or someone called kill -9` on the process.'
        );
      }
      if (result.signal === 'SIGTERM') {
        console.log('The build failed because the process exited too early.');
        console.log(
          'Someone might have called `kill` or `killall`, or the system could be shutting down.'
        );
      }
      process.exit(1);
    }

    process.exit(result.status);
    break;
  }
  case 'test': {
    console.log('This is not supported by us, you should just use:');
    console.log('react-scripts test, in your npm package.json');
    break;
  }
  case 'eject': {
    console.log('This is not supported by us, you should just use:');
    console.log('react-scripts eject, in your npm package.json');
    break;
  }
  default: {
    console.log(`Unknown script ${chalk.green(script)}.`);
    console.log('Kindly ensure you have the latest react-scripts installed');
    console.log(`${chalk.green('Go to this link:')}`);
    console.log('https://create-react-app.dev/docs/updating-to-new-releases');
  }
}
