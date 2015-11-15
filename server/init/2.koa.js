'use strict';

const path = require('path'),
      serve = require('koa-serve'),
      logger = require('koa-logger'),
      favicon = require('koa-favicon'),
      views = require('co-views-ext'),
      router = new require('koa-router')();

module.exports = exports = function *() {
  let viewPath = path.join(this.config.root, 'shared', 'views'),
      viewOptions = {
        ext: 'hbs',
        map: { 'hbs': 'handlebars' },
        helpers: {
          json: JSON.stringify
        }
      },
      renderView = views(viewPath, viewOptions);

  this.name = this.config.applicationName;
  this.render = (html, state) => {   
    return renderView('index', { html: html, state: state });
  };
  this.router = router;
  this.use(logger());
  this.use(favicon(path.join(this.config.root, 'static', 'img', 'favicon.ico')));
  this.use(serve('static', this.config.root));
  this.use(this.router.routes());
};
