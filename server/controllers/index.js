'use strict';

module.exports = exports = function *() {
  const app = this;

  this.router.get('/', function *(next) {
    let title = 'Index',
        html = 'render with react',
        state = {
          boolean: true,
          integer: 15,
          string: `Yes this is a string`
        };

    this.body = yield app.render(html, state, title);
    this.status = 200;
  });
}
