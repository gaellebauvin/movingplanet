var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('assets/css'))
});

// Gulp watch syntax
gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
});
