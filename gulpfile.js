var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();


//watch
gulp.task('watch', ['default'], function() {
    gulp.watch('lib/**/*', ['default']);
});


//default
gulp.task('default', function() {
    gulp.start('styles', 'js', 'html');
});


//////////////////

//styles
gulp.task('styles', function() {
    //less & css
    return gulp.src(['lib/styles/*.less', 'lib/styles/*.css'])
        //.pipe($.sourcemaps.init())
        .pipe($.concat('style.css'))
        .pipe($.less())
        .pipe($.autoprefixer({
            browsers: ['> 5%']
        }))
        //.pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});


//js
gulp.task('js', function() {
    return gulp.src('lib/js/*.js')
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: ['es2015']
        }))
        //.pipe($.concat('main.js'))
        .pipe($.uglify())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});


//html
gulp.task('html', ['styles'], function() {
    return gulp.src('lib/index.html')
        .pipe($.inlineSource({rootpath:'.'}))
        .pipe($.htmlmin({
            collapseWhitespace: true,
            sortAttributes: true
        }))
        .pipe(gulp.dest('.'));
});
