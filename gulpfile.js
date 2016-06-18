var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('cleanBuild', function (cb) {
  var rimraf = require('rimraf');
  rimraf('./build/', cb);
});

gulp.task('copyIndex', ['cleanBuild'], function () {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./build/'));
});

gulp.task('build', ['copyIndex'], function (cb) {
  return gulp.src('')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(''));
});

gulp.task('default', ['build']);
