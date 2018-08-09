'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

const src_path = {
  css: 'assets/sass'
};

const dist_path = {
  css: 'assets/css'
};

gulp.task('sass', function() {
  return gulp.src([src_path.css + '/**/*.scss', src_path.css + '/**/*.sass'])
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(dist_path.css));
});

gulp.task('default', gulp.series('sass'));

gulp.task('watch', function() {
  gulp.watch([src_path.css + '/**/*.scss', src_path.css + '/**/*.sass'], gulp.series('sass'));
});
