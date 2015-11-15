'use strict';

const co = require('co'),
      reqmany = require('reqmany'),
      app = require('koa')();

module.exports = exports = {
  start: () => {
    co(function *() {
      yield *reqmany(['init', 'controllers'], function *(name, module) {
        console.log(`Loading module ${name}...`);
        yield module.call(app);
      });

      app.listen(app.config.port, () => {
        console.log(`Listening on port ${app.config.port}`);
      });
    }).catch((err) => {
      console.log('\nFATAL ERROR!\n');
      console.trace(err.stack.replace('\\n', '\n'));
    });
  }
};
