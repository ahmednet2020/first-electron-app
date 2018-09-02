'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const ts = plugins.typescript;
const tsProject = ts.createProject('tsconfig.json');
const autoprefixer = require('autoprefixer');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');


gulp.task('ts', function () {
    return gulp.src('src/ts/**/*.ts')
        .pipe(tsProject())
        .pipe(plugins.sourcemaps.init({loadMaps: true}))
        .pipe(plugins.babel())
        .pipe(plugins.sourcemaps.write('./maps'))
        .pipe(gulp.dest('public/'));
});
gulp.task("browserify", function () {
  return browserify({
    entries: ['./public/js/apiKey.js'],
    debug: true
  }).bundle()
    .on('error', err => console.log(`browserify ${err}`))
    .pipe(source('apiKey.js'))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/js/'));
});
 // =================================
 // ======= start html config========
 // =================================

gulp.task('html', () => {
	return gulp.src('./src/pug/*.pug')
	.pipe(plugins.pug({pretty:true}))
	.on('error', (err) => {
		console.log(`pug err ${err}`)
	})
	.pipe(gulp.dest('./public/'));
});
 // =================================
 // ======= end html config========
 // =================================

// =================================
// ======= start css config========
// =================================

gulp.task('css', () => {
  return gulp.src('./src/sass/*.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .on('error', plugins.sass.logError)
    .pipe(plugins.postcss([ autoprefixer({browsers: 'last 2 versions'}) ]))
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css/'));
});

// =================================
// ======= end css config========
// =================================

// =================================
// ===== start watch config ========
// =================================

gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', ['css']);
  gulp.watch('./src/pug/**/*.pug', ['html']);
  gulp.watch('./src/ts/**/*.ts', ['ts']);
});

// =================================
// ===== end watch config ========
// =================================

// =================================
// ======= default config run ========
// =================================
gulp.task('default',['html', 'css', 'ts', 'watch'])
