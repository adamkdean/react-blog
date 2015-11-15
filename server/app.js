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

// const co = require('co'),
//       path = require('path'),
//       serve = require('koa-serve'),
//       logger = require('koa-logger'),
//       views = require('co-views-ext'),
//       reqmany = require('reqmany'),
//       config = require('./config'),
//       router = new require('koa-router')(),
//       app = require('koa')();

// app.render = views(config.views.path, config.views.options);
// app.use(logger());
// app.use(serve('static', path.join(__dirname, '..')));
// app.use(router.routes());

// component = React.createElement(ReviewList, opts),
// componentHtml = React.renderToString(component);
// this.body = yield this.render('index', { html: componentHtml, state: opts });
