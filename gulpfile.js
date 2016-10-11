var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var nunjucks = require('gulp-nunjucks');
var connect = require('gulp-connect');
var gopen = require('gulp-open');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-cssnano');
var less = require('gulp-less');
var lesshint = require('gulp-lesshint');
var autoprefixer = require('gulp-autoprefixer');
var surge = require('gulp-surge');
var del = require('del');
var fs = require('fs');

var paths = {
    lint: {
        js: [
            'wwww/js/*.js',
            'gulpfile.js',
        ],
        less: [
            'www/less/*.less',
        ]
    },
    src: {
        html: [
            'www/**/*.html',
        ],
        js: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'www/js/*.js',
        ],
        css: [
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.min.css',
            'bower_components/font-awesome/css/font-awesome.min.css',
        ],
        less: [
            'www/less/*.less',
        ],
        fonts: [
            'bower_components/font-awesome/fonts/*',
            'www/fonts/*',
        ],
        img: [
            'www/img/**/*.png',
        ],
    },
    other: [
        'www/favicon.png',
        //'www/falcon/**/*'
    ],
    dist: {
        base: 'dist/',
        fonts: 'dist/fonts',
        img: 'dist/img',
    }
};

gulp.task('clean', function() {
    del.sync(paths.dist + '**/*');
});

gulp.task('lesslint', function() {
    return gulp.src(paths.lint.less)
        .pipe(lesshint())
        .pipe(lesshint.reporter());
});

gulp.task('jslint', function() {
    return gulp.src(paths.lint.js)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('lint', ['lesslint', 'jslint']);

gulp.task('build-js', function() {
    return gulp.src(paths.src.js)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist.base));
});

gulp.task('build-less', function() {
    return gulp.src(paths.src.less)
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            cascade: false,
            remove: false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.dist.base));
});

gulp.task('build-css', function() {
    return gulp.src(paths.src.css)
        .pipe(concat('libs.css'))
        .pipe(autoprefixer({
            cascade: false,
            remove: false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.dist.base));
});

gulp.task('build-html', function() {
    var today = new Date();

    return gulp.src(paths.src.html)
        .pipe(nunjucks.compile({
            version: today.getTime(),
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(paths.dist.base));
});

gulp.task('build-fonts', function() {
    return gulp.src(paths.src.fonts)
        .pipe(gulp.dest(paths.dist.fonts));
});

gulp.task('build-img', function() {
    return gulp.src(paths.src.img)
        .pipe(gulp.dest(paths.dist.img));
});

gulp.task('build-other', function() {
    return gulp.src(paths.other, {base: 'www'})
        .pipe(gulp.dest(paths.dist.base));
});

gulp.task('watch', function() {
    gulp.watch(paths.src.js, ['jslint', 'build-js']);
    gulp.watch(paths.src.less, ['lesslint', 'build-less']);
    gulp.watch(paths.src.html, ['build-html']);
    gulp.watch(paths.src.css, ['build-css']);
    gulp.watch(paths.src.fonts, ['build-fonts']);
    gulp.watch(paths.src.image, ['build-img']);
});

gulp.task('build', ['lint', 'build-html', 'build-less', 'build-js', 'build-css', 'build-fonts', 'build-img', 'build-other']);

gulp.task('serve', ['build', 'watch'], function() {
    connect.server({
        root: paths.dist.base,
        ip: '0.0.0.0',
        port: 8080,
    });

    return gulp.src(paths.src.html)
        .pipe(gopen({
            uri: 'http://localhost:8080'
        }));
});

gulp.task('deploy', ['build'], function() {
    return surge({
        project: paths.dist.base,
        domain: fs.readFileSync('CNAME', 'utf-8'),
    });
});
