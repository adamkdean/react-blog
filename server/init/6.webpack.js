'use strict';

const path = require('path'),
      webpack = require('webpack');

 /* ------------------------------------------------------------ *\
 |  Runtime webpack bundle compilation                            |
 |  @purpose: at startup we'll use webpack to bundle up the code  |
 |            that'll run on the client machine to enable react.  |
 |  @note: if there is a problem with the bundle compilation, you |
 |         might not see it output via err. To check why a bundle |
 |         may not be building, run 'webpack' in the CLI.         |
 \* ------------------------------------------------------------ */

module.exports = exports = function *() {
  const configPath = path.join(this.config.root, 'webpack.config'),
        config = require(configPath),
        compiler = webpack(config);

  compiler.run((err, stats) => {
    err && console.log(err);
  });
};
