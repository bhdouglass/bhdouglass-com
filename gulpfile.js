const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const nunjucks = require('gulp-nunjucks');
const del = require('del');

const scss_paths = [
    'src/sass/*.scss',
];

const html_paths = [
    'src/**/*.html',
];

const img_paths = [
    'src/img/*.svg',
    'src/img/*.png',
];

gulp.task('clean', function(done) {
    del.sync('build/**/*');
    done();
});

gulp.task('build-scss', function() {
    return gulp.src(scss_paths)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false,
            remove: false,
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('build'));
});

gulp.task('build-html', function() {
    let today = new Date();

    return gulp.src(html_paths)
        .pipe(nunjucks.compile({
            version: today.getTime(),
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});

gulp.task('build-img', function() {
    return gulp.src(img_paths)
        .pipe(gulp.dest('build/img'));
});

gulp.task('watch', function() {
    gulp.watch(html_paths, gulp.series('build-html'));
    gulp.watch(scss_paths, gulp.series('build-scss'));
    gulp.watch(img_paths, gulp.series('build-img'));
});

gulp.task('build', gulp.series('clean', 'build-html', 'build-scss', 'build-img'));

gulp.task('serve', gulp.parallel('build', 'watch', function() {
    return connect.server({
        root: 'build',
        ip: '0.0.0.0',
        port: 5555,
    });
}));

gulp.task('default', gulp.series('build'));
