 var concat = require('gulp-gzip');
 var gulp = require('gulp');
 var minify = require('gulp-minify');


gulp.task('default',  gulp.series(copyIndex));

function copyIndex() {
  console.log("in index");
     return gulp.src('./dist/*.map').pipe(minify()).pipe(gulp.dest('./dist', {overwrite: true}));
     done();
 }

//
// // gulp.task('concat', function () {
// //   return gulp.src([
// //     './dist/inline*.js',
// //     './dist/poly*.js',
// //     './dist/styl*.js',
// //     './dist/main*.js'])
// //     .pipe(concat('all.js'))
// //     .pipe(gulp.dest('./dist/'));
// // });
//

//
// // // var gulp = require('gulp');
// //  var gzip = require('gulp-gzip');
// // //
// // // gulp.task('compress', function() {
// // //   gulp.src(['./dist/**/*.*'])
// // //       .pipe(gzip())
// // //       .pipe(gulp.dest('./dist'));
// // // });
// // var gulp = require('gulp');
// // var del = require('del');
// //
// // gulp.task('default',  gulp.series(copyIndex, copyAppJs));
// //
// // function clean(done) {
// //     // del(['./dist/**/*.*']);
// //     done();
// // }
// //
// // function copyIndex(done) {
// //     return gulp.src('./dist/index.html').pipe(gzip()).pipe(gulp.dest('./dist', {overwrite: true}));
// //     done();
// // }
// //
// // function copyAppJs(done) {
// //     // return gulp.src('./src/**/*.js').pipe(gzip()).pipe(gulp.dest('./dist', {overwrite: true}));
// //     // return gulp.src('./src/**/*.js')
// //     return gulp.src('./dist/js')
// //       // Minify the file
// //     .pipe(gzip())
// //       // Output
// //       .pipe(gulp.dest('./dist/js'));
// //     done();
// // }
// // // gulp.task('scripts', function() {
// // //   return gulp.src('./src/js/**/*.js')
// // //     // Minify the file
// // //     .pipe(uglify())
// // //     // Output
// // //     .pipe(gulp.dest('./dist/js'))
// // // });
// // // function copyAppJs(done) {
// // //     return gulp.src('./src/**/*.js').pipe(gzip()).pipe(gulp.dest('./dist', {overwrite: true}));
// // //     done();
// // // }
