'use strict';

const path = require('path'),
      webpack = require('webpack');

module.exports = exports = function *() {
  const configPath = path.join(this.config.root, 'webpack.config'),
        config = require(configPath),
        compiler = webpack(config);

  compiler.run((err, stats) => {
    err && console.log(err);
  });
};
