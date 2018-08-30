'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');

gulp.task('css', () => {
  return gulp.src('./src/sass/*.scss')
  	.pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .on('error', plugins.sass.logError)
    .pipe(plugins.postcss([ autoprefixer({browsers: 'last 2 versions'}) ]))
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('html', () => {
	return gulp.src('./src/pug/*.pug')
	.pipe(plugins.pug({pretty:true}))
	.on('error', (err) => {
		console.log(`pug err ${err}`)
	})
	.pipe(gulp.dest('./app/'));
});

gulp.task("js", function () {
  return gulp.src('./src/js/*.js')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel())
    .on('error', (err) => {
      console.log(`js err ${err}`)
    })
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', () => {
  gulp.watch(['./src/sass/*.scss'], ['css']);
  gulp.watch(['./src/pug/*.pug'], ['html']);
  gulp.watch(['./src/js/*.js'], ['js']);
});

gulp.task('default',['html', 'css', 'js', 'watch'])
