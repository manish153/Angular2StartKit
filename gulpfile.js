var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');

// SERVER
gulp.task('clean', function(){
    return del('dist')
});

/*gulp.task('move-models',function(){
    return gulp.src(['server/models/bear.js'], {base: './models/'})
    .pipe(gulp.dest('dist'));

});*/ 

gulp.task('move-models',function(){
    return gulp.src('server/models/bear.js')  //to move multiple files with fodler structure use 'base' property. check css move for syntax
    .pipe(gulp.dest('dist/models'));

});

gulp.task('move-css',function(){
    return gulp.src(['client/app/assets/app.css','client/app/assets/app2.css','client/app/assets/light-bootstrap-dashboard.css','client/app/assets/demo.css','client/app/assets/pe-icon-7-stroke.css','client/app/assets/bootstrap.min.css'],{base: 'client/'})  //to move multiple files with fodler structure use 'base' property. didn't work when tried. 
    .pipe(gulp.dest('dist'));
});

gulp.task('move-template',function(){
    return gulp.src('client/app/templates/*')  //to move multiple files with fodler structure use 'base' property. didn't work when tried. 
    .pipe(gulp.dest('dist/app/templates'));
});




gulp.task('build:server', function () {
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
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2-jwt/angular2-jwt.js',
    'angular2/bundles/http.dev.js'

] 

gulp.task('build:index', function(){
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)}) 
    
    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'))
     
    //Let's copy our index into dist   
    var copyIndex = gulp.src('client/index.html')
        .pipe(gulp.dest('dist'))
    return [copyJsNPMDependencies, copyIndex];
});

gulp.task('build:app', function(){
    var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'))
});


gulp.task('build', function(callback){
    runSequence('clean','move-models','move-template','move-css','build:server', 'build:index', 'build:app', callback);
});

gulp.task('default', ['build']);