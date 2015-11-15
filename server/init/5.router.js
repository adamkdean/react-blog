'use strict';

const router = new require('koa-router')();

module.exports = exports = function *() {
  this.router = router;
  this.use(this.router.routes());
};
