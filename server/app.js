'use strict';

const koa = require('koa'),
      path = require('path'),
      serve = require('koa-serve'),
      logger = require('koa-logger'),
      views = require('co-views-ext'),
      router = new require('koa-router')(),
      config = require('./config'),
      app = new koa();

app.render = views(config.views.path, config.views.options);
app.use(logger());
app.use(serve('static', path.join(__dirname, '..')));
app.use(router.routes());

// Initialise
function init(port) {
  port = port || process.env.HTTP_PORT || 8000;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

module.exports = exports = {
  start: init
};
