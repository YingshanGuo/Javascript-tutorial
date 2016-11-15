var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');

gulp.task('default', function() {
    return watch('js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dest/js'));
});