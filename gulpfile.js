'use strict';

const gulp = require('gulp'),
      babel = require('gulp-babel'),
      notice = require('gulp-notice'),
      nodemon = require('gulp-nodemon');

gulp.task('build', function () {
  return gulp.src('shared/components/**/*.jsx')
    .pipe(babel())
    .pipe(notice())
    .pipe(gulp.dest('server/components'));
});

gulp.task('dev', function () {
  nodemon({
    verbose: true,
    script: './server/start.js',
    ext: 'js jsx',
    ignore: [
      'node_modules/',
      'server/components/',
      'static/'
    ],
    tasks: [
      'build'
    ]
  });
});

gulp.task('default', ['build']);
