var gulp = require('gulp'),
    bower = require('gulp-bower'),
    bower_files = require('gulp-bower-files'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    streamqueue = require('streamqueue');

gulp.task("bower", function() {
    return bower();
});

gulp.task("default", function() {
    return streamqueue({objectMode: true},
	bower_files(),
	gulp.src("src/*.js")
    )
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("./dist/"))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({outSourceMap: true}))
    .pipe(gulp.dest("./dist/"));
});
