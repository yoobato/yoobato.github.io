'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
};

exports.sass = buildStyles;
exports.watch = function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
};
