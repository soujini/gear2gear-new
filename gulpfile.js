var gulp = require('gulp');
var gzip = require('gulp-gzip');
var strip = require('gulp-strip-comments');//uninstall this
const purify = require('gulp-purifycss');

gulp.task('default',  gulp.series(clean, compress, x));

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

function x(done){
  return gulp.src('./dist/styles.*.css')
  .pipe(
    purify(
      //['./src/app/**/*.ts', './src/app/**/*.html'],
      ['./src/dist/*.js.*', './src/app/**/*.html'],
      {
        info: true, // Outputs reduction information (like in the screenshot above)
        minify: true, // Minifies the files after reduction
        rejected: false, // Logs the CSS rules that were removed
        whitelist: ['*transition*', '*dimmer*'] // Ignored css classes
      }
    ),
  )
  .pipe(gulp.dest('./dist/'));
  done();
}
//
// function strip(done) {
//   return gulp.src('./dist/*.js')
//   .pipe(strip())
//   .pipe(gulp.dest('./dist', {overwrite: true}));
//   done();
// }
