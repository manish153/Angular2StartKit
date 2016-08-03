var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');

// SERVER
gulp.task('clean', function() {
    return del('dist')
});

gulp.task('move-models', function() {
    return gulp.src('server/models/*') //to move multiple files with fodler structure use 'base' property. check css move for syntax
        .pipe(gulp.dest('dist/models'));

});

gulp.task('move-uploads', function() {
    return gulp.src('uploads/*') //to move multiple files with fodler structure use 'base' property. check css move for syntax
        .pipe(gulp.dest('dist/uploads'));
});

gulp.task('move-css', function() {
    return gulp.src(['client/app/assets/styles.css', 'client/app/assets/images/*','client/app/assets/js/*'], {
            base: 'client/'
        }) //to move multiple files with fodler structure use 'base' property. didn't work when tried. 
        .pipe(gulp.dest('dist'));
});

gulp.task('build:server', function() {
    var tsProject = ts.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
    return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
});

// CLIENT

/*
  jsNPMDependencies, sometimes order matters here! so be careful!
*/
var jsNPMDependencies = [

    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js', 
    '@angular/**/*.js',
    '@angular/**/*.umd.js',   
    'angular2-jwt/angular2-jwt.js',
    'angular2-notifications/**/*.js',
    'file-saver/FileSaver.js',
    'zone.js/dist/zone.js',
    'reflect-metadata/Reflect.js'
]

gulp.task('build:index', function() {
    var mappedPaths = jsNPMDependencies.map(file => {
        return path.resolve('node_modules', file)
    })

    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {
            base: 'node_modules'
        })
        .pipe(gulp.dest('dist/libs'))

    //Let's copy our index into dist   
    var copyIndex = gulp.src('client/index.html')
        .pipe(gulp.dest('dist'))

    return [copyJsNPMDependencies, copyIndex];
});

gulp.task('build:app', function() {
    var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
});


gulp.task('build', function(callback) {
    runSequence('clean', 'move-models','move-uploads', 'move-css', 'build:server', 'build:index', 'build:app', callback);
});

gulp.task('default', ['build']);