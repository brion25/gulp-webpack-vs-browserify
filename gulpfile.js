var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify')
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename');

gulp.task('default',['browserify','webpack-no-config','webpack-config'])

gulp.task('browserify',function(){
    return browserify('./app/entry.js')
        .bundle()
        .pipe(source('bundle.browserify.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});

gulp.task('webpack-no-config',function(){
    return gulp.src('./app/entry.js')
      .pipe(webpack())
      .pipe(uglify())
      .pipe(rename('bundle.webpack.no-config.js'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('webpack-config',function(){
    return gulp.src('./app/entry.js')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('dist/'));
});
