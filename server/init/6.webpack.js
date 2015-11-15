'use strict';

const path = require('path'),
      webpack = require('webpack');

module.exports = exports = function *() {
  const configPath = path.join(this.config.root, 'webpack.config'),
        config = require(configPath),
        compiler = webpack(config);

  compiler.run((err, stats) => {
    console.log('finished running webpack compiler');
    err && console.log(err);
  });
};
