var gulp = require('gulp'),
injectPartials = require('gulp-inject-partials');


gulp.task('partial', function() {
  return gulp.src('./app/**/*.html')
    .pipe(injectPartials())
    .pipe(gulp.dest('./app'))
});
