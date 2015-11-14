'use strict';

const koa = require('koa'),
      path = require('path'),
      serve = require('koa-serve'),
      logger = require('koa-logger'),
      router = new require('koa-router')(),
      app = new koa();

function init(port) {
  port = port || process.env.HTTP_PORT || 8000;
  app.use(logger());
  app.use(serve('static', path.join(__dirname, '..')));
  app.use(router.routes());
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

module.exports = exports = {
  start: init
};
