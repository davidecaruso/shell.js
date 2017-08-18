var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var pump = require('pump');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');
var dist = true === util.env.dist;
var paths = {
  source: 'src/',
  destination: 'dist/'
};

gulp.task('default', ['compass', 'jshint', 'watch']);

gulp.task('jshint', function () {
  return gulp.src(paths.source + 'js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.source + 'js/**/*.js')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.destination + 'js'));
});

gulp.task('compass', function () {
  gulp.src(paths.source + 'sass/**/*.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(compass({
      css:      paths.destination + 'css',
      sass:     paths.source + 'sass',
      style:    dist ? "compressed" : "expanded",
      comments: true,
      force:    true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('tmp/css'));
});

gulp.task('watch', function () {
  gulp.watch(paths.source + 'js/**/*.js', ['jshint', 'scripts']);
  gulp.watch(paths.source + 'sass/**/*.scss', ['compass']);
});