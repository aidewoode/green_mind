var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var csslint = require('gulp-csslint');
var scsslint = require('gulp-scss-lint');
var rename = require('gulp-rename');

gulp.task('watch_change', function() {
  gulp.watch('scss/**/*.scss', function(event) {
    gulp.src('scss/green-mind.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('docs/source/stylesheets'));
  });
});

gulp.task('minify_css', function() {
  gulp.src('dist/css/green-mind.css')
    .pipe(rename("green-mind.mini.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('publish_css', function() {
  gulp.src('scss/green-mind.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('csslint', function() {
  gulp.src('dist/css/green-mind.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('scsslint', function() {
  gulp.src('scss/**/*.scss')
    .pipe(scsslint());
});

