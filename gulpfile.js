var gulp = require('gulp');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require("webpack-stream");
var util = require('gulp-util');
var dist = true === util.env.dist;
var paths = {
  source:      'src/',
  destination: 'dist/'
};

/// Lint task
gulp.task('lint', () => {
  return gulp.src('src/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

/// Build task
gulp.task('build', () => {
  return gulp.src(paths.source + 'js/shell.js')
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify({
      preserveComments: "license",
      compress:         {
        negate_iife: false
      }
    }))
    .pipe(rename('shell.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.destination + 'js'));
});

/// Compass task
gulp.task('styles', () => {
  gulp.src(paths.source + 'sass/**/*.scss')
    .pipe(compass({
      css:       paths.destination + 'css',
      sass:      paths.source + 'sass',
      style:     dist ? "compressed" : "expanded",
      comments:  true,
      sourcemap: true,
      force:     true
    }))
});

/// Watch task
gulp.task('watch', () => {
  gulp.watch(paths.source + 'sass/**/*.scss', ['styles']);
  gulp.watch(paths.source + 'js/**/*.js', ['lint', 'build']);
});

/// Default task
gulp.task('default', ['styles', 'lint', 'build', 'watch']);