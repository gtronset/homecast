var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var connect = require('gulp-connect');

gulp.task('concatJS', function () {
    var jsArray = [
        './assets/js/weather.js',
        './assets/js/variables.js',
        './assets/js/backgrounds.js',
        './assets/js/icons.js',
        './assets/js/script.js'
    ].concat();

    gulp.src(jsArray)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('sass', function () {
    return gulp.src('./assets/styles/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename("style.css"))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true,
        port: 3141
    });
});

gulp.task('watched', function () {
    gulp.src('./public/index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./assets/styles/app.scss'], ['sass', 'watched']);
    gulp.watch(['./public/index.html'], ['watched']);
    gulp.watch(['./assets/js/**/*.js'], ['concatJS', 'watched']);
});

gulp.task('init', ['sass', 'concatJS'], function(){});

gulp.task('default', ['connect', 'watch', 'init']);