'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/index.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('sass', function () {
  gulp.src('./app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./app/scss/**/*.scss', ['sass', 'html']);
});

gulp.task('default', ['connect', 'watch','sass:watch']);


 
