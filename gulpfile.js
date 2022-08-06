const gulp = require('gulp'),
      concat = require('gulp-concat'),
      sass = require('gulp-sass')(require('sass')),
      pug = require('gulp-pug'),
      watch = require('gulp-watch');

gulp.task("scss", () => {
    const mask = 'blocks/**/*.scss';
    const run = () => gulp.src(mask)
    .pipe( concat('main.css') )
    .pipe( sass({outputStyle: 'compressed'}))
    .pipe( gulp.dest('./') );

    watch(mask, run);
    
    return run();
});

gulp.task('pug', () => {
    const mask = './*.pug';
    const run = () => gulp.src(mask)
    .pipe( pug() )
    .pipe( gulp.dest('./') );

    watch(mask, run);
    
    return run();
});

gulp.task('build:watch', gulp.series('scss','pug'));
