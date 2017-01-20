var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

gulp.task('minify', function () {
    return gulp.src(['js/*.js'])
        .pipe(uglify())
        .pipe(rename('build.js'))
        .pipe(gulp.dest('build'))
});
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir:"E:/my_project/lightBox"
        }
    });
    gulp.watch([                    //监听文件变化数组
        '*.html',
        'build/*.*'
    ]).on("change", browserSync.reload);
});
gulp.task('watch',function () {
    gulp.watch('js/*.js',['minify']);
})
gulp.task('default',['watch','server']);