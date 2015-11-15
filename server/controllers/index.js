'use strict';

const React = require('react'),
      ReactDOMServer = require('react-dom/server'),
      App = require('../components/App');

module.exports = exports = function *() {
  const app = this;

  this.router.get('/', function *(next) {
    const title = app.config.applicationName + ' - Index',
          state = { articles: app.config.articles },
          component = React.createElement(App, state),
          html = ReactDOMServer.renderToString(component);

    this.body = yield app.render(html, state, title);
    this.status = 200;
  });
}
