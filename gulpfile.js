var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var series = require('stream-series');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');
var LessAutoprefix = require('less-plugin-autoprefix');
var rename = require("gulp-rename");
var connect = require('gulp-connect');

var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('concatJS', function () {
    var jsArray = [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/moment/min/moment.min.js',
        './node_modules/lodash/lodash.min.js',
        //'./node_modules/weather.js/dist/weather.min.js',
        './assets/js/weather.js',
        './assets/js/variables.js',
        './assets/js/backgrounds.js',
        './assets/js/icons.js',
        './assets/js/script.js'
    ].concat();

    gulp.src(jsArray) // path to your files
        .pipe(concat('scripts.js'))  // concat and name it "scripts.js"
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