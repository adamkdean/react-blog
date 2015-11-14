const path = require('path');

module.exports = exports = {
  views: {
    path: path.join(__dirname, '..', 'shared', 'views'),
    options: {
      ext: 'hbs',
      map: { 'hbs': 'handlebars' },
      helpers: {
        json: JSON.stringify
      }
    }
  }
};
