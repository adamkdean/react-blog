'use strict';

const path = require('path'),
      serve = require('koa-serve'),
      favicon = require('koa-favicon');

module.exports = exports = function *() {
  this.use(favicon(path.join(this.config.root, 'static', 'img', 'favicon.ico')));
  this.use(serve('static', this.config.root));
};
