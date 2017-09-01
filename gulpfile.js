var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');
var dist = true === util.env.dist;
var paths = {
  source: 'src/',
  destination: 'dist/'
};

gulp.task('default', ['styles', 'scripts', 'watch']);

gulp.task('scripts', function () {
  return gulp.src(paths.source + 'js/**/*.js')
     /// JSHint
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(jshint.reporter('jshint-stylish'))
    /// Uglify
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.destination + 'js'));
});

gulp.task('styles', function () {
  gulp.src(paths.source + 'sass/**/*.scss')
     /// Compass
    .pipe(compass({
      css:      paths.destination + 'css',
      sass:     paths.source + 'sass',
      style:    dist ? "compressed" : "expanded",
      comments: true,
      sourcemap: true,
      force:    true
    }))
});

gulp.task('watch', function () {
  gulp.watch(paths.source + 'js/**/*.js', ['scripts']);
  gulp.watch(paths.source + 'sass/**/*.scss', ['styles']);
});