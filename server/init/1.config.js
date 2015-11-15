'use strict';

const config = require('config'),
      path = require('path');

let env = {
  root: path.resolve(process.cwd()),
  port: process.env.HTTP_PORT || 8000
};

module.exports = exports = function *() {
  this.config = config;
  Object.assign(this.config, env);
};
