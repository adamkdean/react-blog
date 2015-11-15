'use strict';

const _ = require('lodash'),
      React = require('react'),
      ReactDOMServer = require('react-dom/server'),
      App = require('../components/App');

module.exports = exports = function *() {
  const app = this;

  var paginate = (array, page, take) => {
    const skip = (page - 1) * take;
    return (skip + take <= array.length)
      ? array.slice(skip, skip + take)
      : [];
    // array.slice(array.length - take)
  };

  this.router.get('/', function *(next) {
    const title = app.config.applicationName,
          page = this.query.page && this.query.page > 0 && this.query.page || 1,
          pages = app.config.articles.length / app.config.articlesPerPage,
          articles = paginate(app.config.articles, page, app.config.articlesPerPage),
          state = { articles: articles, page: page, pages: pages },
          component = React.createElement(App, state),
          html = ReactDOMServer.renderToString(component);

    this.status = 200;
    this.body = yield app.render(html, state, title);
  });

  this.router.get('/:slug', function *(next) {
    const slug = this.params.slug || undefined;

    if (slug) {
      const article = _.find(app.config.articles, (article) => {
        return article.slug == slug;
      });

      if (article) {
        const title = `${app.config.applicationName} - ${article.title}`,
              state = { nopages: true, articles: [article] },
              component = React.createElement(App, state),
              html = ReactDOMServer.renderToString(component);

        this.status = 200;
        this.body = yield app.render(html, state, title);
      }
    }
  });
}
