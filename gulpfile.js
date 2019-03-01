var gulp = require('gulp');
var gzip = require('gulp-gzip');
var strip = require('gulp-strip-comments');

gulp.task('default',  gulp.series(clean, compress));

function clean(done) {
  // del(['./dist/**/*.*']);
  done();
}
function compress(done) {
  return gulp.src(['./dist/*.js'])
  .pipe(gzip())
  .pipe(gulp.dest('./dist', {overwrite: true}));
  done();
}
//
// function strip(done) {
//   return gulp.src('./dist/*.js')
//   .pipe(strip())
//   .pipe(gulp.dest('./dist', {overwrite: true}));
//   done();
// }
