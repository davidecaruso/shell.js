var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  compass = require('gulp-compass'),
  sourcemaps = require('gulp-sourcemaps'),
  util = require('gulp-util'),
  dist = true === util.env.dist;

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('compass', function () {
  gulp.src('./src/*.scss')
    .pipe(sourcemaps.init())
    .pipe(compass({
      css:      'dist/css',
      sass:     'src/sass',
      style:    dist ? "compressed" : "expanded",
      comments: true,
      force:    true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('tmp/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['jshint']);
  gulp.watch('src/sass/**/*.scss', ['compass']);
});