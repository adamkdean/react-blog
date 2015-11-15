'use strict';

const React = require('react'),
      App = require('../components/App');

module.exports = exports = function *() {
  const app = this;

  this.router.get('/', function *(next) {
    const title = app.config.applicationName + ' - Index',
          state = { foo: 'This is a test' },
          component = React.createElement(App, state),
          html = React.renderToString(component);

    this.body = yield app.render(html, state, title);
    this.status = 200;
  });
}
