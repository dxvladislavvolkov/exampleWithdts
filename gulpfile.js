var gulp = require('gulp');
var runSequence = require("run-sequence");
var path = require('path');
var typescript = require('gulp-typescript');
var shell = require('gulp-shell');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var mergeJson = require('gulp-merge-json');
var header = require('gulp-header');
var fs = require('fs');

gulp.task('build.ngc', function(done) {
    var buildPath = path.join("./src", 'tsconfig.json'),
        task = shell.task(['ngc -p ' + buildPath ]);
    
    task(done);
});