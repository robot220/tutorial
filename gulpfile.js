var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('build', function () {
    return gulp.src('src/app.js')
        .pipe(babel())
        .pipe(gulp.dest('out'))
});

// Use in CLI
//
gulp.task('default', ['build'], function() {
    console.log('The main task has been completed!');
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['build']);
    console.log('Watch mode is activated now!');
});