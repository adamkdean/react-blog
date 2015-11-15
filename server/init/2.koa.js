'use strict';

const path = require('path'),
      logger = require('koa-logger'),
      views = require('co-views-ext');

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
  this.render = (html, state, title) => {
    return renderView('index', { html: html, state: state, title: title });
  };

  this.use(logger());
};
