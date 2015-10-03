var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babelfy = require('gulp-babel');
var getsassy = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gzip = require('gulp-gzip');
var gutil = require('gulp-util');
var rev = require('gulp-rev');
var minifycss = require('gulp-minify-css');
var fingerprint = require('gulp-fingerprint');
var rename = require('gulp-rename');
var jade = require('gulp-jade');

gulp.task('templates', function() {
  return gulp.src('public/views/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'))
});

gulp.task('html', function () {
  return gulp.src('public/views/index.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('scripts', function() {
  return gulp.src('public/javascripts/**/*.js')
    .pipe(concat('all.js'))
    .pipe(babelfy())
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('css', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(getsassy().on('error', getsassy.logError))
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
})

gulp.task('watchout', function () {
  gulp.watch('public/views/**/*.jade', ['templates'])
  gulp.watch('public/javascripts/**/*.js', ['scripts'])
  gulp.watch('sass/**/*.scss', ['css'])
})


gulp.task('default', ['templates', 'scripts', 'css', 'watchout' ])
