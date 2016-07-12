var gulp = require('gulp');
var livereload = require('gulp-livereload');
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
  .pipe(gulp.dest(''))
  .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**/*.jsx', ['build']);
});

gulp.task('default', ['watch']);
