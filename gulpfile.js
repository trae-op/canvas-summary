var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var jsmin = require('gulp-jsmin');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

 
gulp.task('style-prod', function () {
  return gulp.src('./css/*.css')
    .pipe(cssmin())
    .pipe(concat('style-min.css'))
    .pipe(gulp.dest('./style/'));
});


gulp.task('build-prod', function () {
  return gulp.src([
    './js/device.min.js',
    './js/canvas/konva.min.js',
    './js/canvas/container.js',
    './js/canvas/models.js',
    './js/canvas/global.prototypes.js',
    './js/canvas/button-start/script.js',
    './js/canvas/other-circles/script.js',
    './js/canvas/content/script.js',
    './js/canvas/items-menu/script.js',
    './js/canvas/hover-item-menu/script.js',
    './js/canvas/hover-text-content/script.js',
    './js/canvas/close/script.js',
    './js/canvas/settings/script.js',
    './js/canvas/view.js'
    ])
    .pipe(uglify({ mangle: false }))
    .pipe(concat('app-min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/sass/**/*.scss', ['sass']);
});