'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('css', () => {
  return gulp.src('./src/sass/*.scss')
  	.pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .on('error', plugins.sass.logError)
    .pipe(plugins.postcss([ autoprefixer({browsers: 'last 2 versions'}) ]))
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('html', () => {
	return gulp.src('./src/pug/*.pug')
	.pipe(plugins.pug({pretty:true}))
	.on('error', (err) => {
		console.log(`pug err ${err}`)
	})
	.pipe(gulp.dest('./public/'));
});

gulp.task("js", function () {
  return gulp.src('./src/js/*.js')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel())
    .on('error', (err) => {
      console.log(`js err ${err}`)
    })
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task("browserify", function () {
  return browserify({
  	entries: ['./src/js/index.js'],
    debug: true
  }).transform('babelify')
  	.bundle()
  	.on('error', err => console.log(`browserify ${err}`))
  	.pipe(source('app.js'))
  	.pipe(buffer())
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', () => {
  gulp.watch(['./src/sass/**/*.scss'], ['css']);
  gulp.watch(['./src/pug/**/*.pug'], ['html']);
  gulp.watch(['./src/js/**/*.js'], ['js']);
});

gulp.task('default',['html', 'css', 'js', 'watch'])
