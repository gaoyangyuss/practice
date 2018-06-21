/**
 * 
 * @authors ${author} (${email})
 * @date    2018-06-12
 * @version $Id$
 */
var gulp = require('gulp'),
	less = require('gulp-less'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch'),
	cssmin = require('gulp-minify-css');

gulp.task('less',function(){
	gulp.src(['assets/style/*.less'])
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets/style'));
});

gulp.task('watch',function(){
	gulp.watch('assets/style/*.less',['less']);
});

gulp.task('minify-css',function(){
	gulp.src('assets/style/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('assets/style'))
});
	
gulp.task('default',['watch']);
