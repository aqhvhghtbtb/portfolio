const gulp = require('gulp');
const sass = require('gulp-sass');
// const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');
const order = require('gulp-order');

gulp.task('sass', function(){
    return gulp.src('src/resources/sass/**/*.scss')
               .pipe(sass()) // Converts Sass to CSS with gulp-sass
               .pipe(autoprefixer())
               .pipe(gulp.dest('public/css/'))
});

gulp.task('js', function(){
    return gulp.src(['src/resources/js/**/*.js', 'resources/js/*.js'])
               .pipe(order([
                               "partials/*.js",
                               "main.js",
                           ]))
               .pipe(concat('main.js'))
               .pipe(gulp.dest('public/js/'))
});

// gulp.task('build', function() {
//     return gulp.src(['resources/sass/**/*.scss'])
//         .pipe(gulpIf('*css', cssnano()))
//         .pipe(gulp.dest('public/css'))
// });

// gulp.task('build', function(){
//     return gulp.src(['resources/sass/**/*.sass', 'resources/js/**/*.js'])
//                .pipe(gulpIf('*.js', uglify()))
//                // Minifies only if it's a CSS file
//                .pipe(gulpIf('*.css', cssnano()))
//                .pipe(gulp.dest('dist'))
// });

gulp.task('watch-dev', function() {
    gulp.watch('src/resources/sass/**/*.scss', gulp.series('sass'));
    gulp.watch(['src/resources/js/**/*.js', 'resources/js/*.js'], gulp.series('js'));
});
