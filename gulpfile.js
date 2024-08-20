var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var imageminPngquant = require('imagemin-pngquant');

// 压缩 public 目录 css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});
// 压缩 public 目录 html
gulp.task('minify-html', function(done) {
  gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'));
    done();
});
// 压缩 public/js 目录 js
gulp.task('minify-js', function(done) {
    gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
        done();
});
//压缩图片
gulp.task('minify-images', function(done) {
    gulp.src(['./public/**/*.{png,jpg,gif,jpeg}','!./public/**/mysql-lt.png'])
        .pipe(imagemin({
            progressive: true,
            use: [imageminMozjpeg({quality: 90}), imageminPngquant({ quality: [80,90] })]
        }))
        .pipe(gulp.dest('./public'));
    done();
});
//gulp4
gulp.task('default', gulp.series('minify-html','minify-css','minify-js','minify-images'));
