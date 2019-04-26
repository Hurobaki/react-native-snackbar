const exec = require('child_process').exec;
exec('yarn').on('exit', () => exec('yarn build'));
