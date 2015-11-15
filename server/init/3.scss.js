'use strict';

const scss = require('koa-scss'),
      path = require('path');

/* Options:
 *
 *    `force`       Always re-compile
 *    `debug`       Output debugging information
 *    `src`         Source directory used to find .scss files
 *    `dest`        Destination directory used to output .css files
 *                  when undefined defaults to `src`.
 *    `outputStyle` Sass output style (nested,expanded, compact or compressed)
 *    `response`    Always write output directly to response
 */

module.exports = exports = function *() {
  this.use(scss({
    src: path.join(this.config.root, '/static/scss/'),
    dest: path.join(this.config.root, '/static/css/'),
    prefix: '/static/css',
    outputStyle: 'compressed',
    force: true,
    debug: true,
    response: true
  }));
};
