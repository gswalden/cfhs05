var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var less        = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('fa', function () {
    return gulp.src('bower_components/fontawesome/less/font-awesome.less')
        .pipe(less())
        .pipe(gulp.dest('bower_components/fontawesome/css'))
});

gulp.task('less', function () {
    return gulp.src('*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest(''))
        .pipe(reload({stream:true}));
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Default task to be run with `gulp`
gulp.task('default', ['less', 'browser-sync'], function () {
    gulp.watch("*.less", ['less']);
    gulp.watch("*.html", ['bs-reload']);
});
