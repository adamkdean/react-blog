'use strict';

const gulp = require('gulp'),
      babel = require('gulp-babel'),
      notice = require('gulp-notice');

gulp.task('components', function () {
  return gulp.src('shared/components/**/*.js')
    .pipe(babel())
    .pipe(notice())
    .pipe(gulp.dest('server/components'));
});

gulp.task('default', ['components']);
