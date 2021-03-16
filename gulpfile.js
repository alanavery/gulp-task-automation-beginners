const { series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');

const compile = () => {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

const minify = () => {
  return gulp.src('./css/*.css')
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(gulp.dest('./dist'));
};

const watch = () => {
  gulp.watch('./sass/*.scss', compile);
  gulp.watch('./css/*.css', minify);
};

exports.default = series(compile, minify, watch);
