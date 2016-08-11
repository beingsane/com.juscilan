var gulp = require('gulp');

var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var htmlreplace = require('gulp-html-replace');
var uglify = require('gulp-uglify');
var order = require("gulp-order");
var runSequence = require('run-sequence');
var del = require('del');
 

gulp.task('concatena-css', function() {
  return gulp.src('./public/css/_source/*.css')
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./public/css/dest-con/'));
});
 
gulp.task('minifica-css', function() {
  return gulp.src('./public/css/dest-con/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css/dest-min/'));
});

gulp.task('apaga-jpg', function () {
  return del([
    './js/_source/*.jpg',
  ]);
});


gulp.task('concatena-js', function() {
  return gulp.src('./js/_source/*.js')
      .pipe(order([
      "jquery-2.1.1.min.js",
      "materialize.js",
      "analitics.js",
      "init.js",      
      "dist.js"
      ]))
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./public/js/dest-con/'));
});

/*
gulp.task('minjs', function() {
  return gulp.src('./public/js/dest-con/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/dest-min'));
});



gulp.task('rhtml', function() {
  gulp.src('./public/html/index.html')
    .pipe(htmlreplace({
        'css': 'css/dest-min/app.min.css',
        'js': 'js/dest-con/app.min.js'
    }))
    .pipe(gulp.dest('./public/html/dest-rep'));
});


gulp.task('mhtml', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('./public/html/dest-rep/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public/'));
});

*/

gulp.task('default', function (done) {
    //return runSequence('concatena-css', 'minifica-css', 'cjs','rhtml','mhtml', done);
    return runSequence(
      'concatena-css'
    , 'minifica-css'
    ,'apaga-jpg'
    ,'concatena-js'
    , done);
});
