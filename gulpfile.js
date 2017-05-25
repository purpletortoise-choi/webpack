var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

var webpackConfig = require('./webpack.config.js');

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------
gulp.task('wp:index-babel', function(){
    webpack(webpackConfig, function(err, stats){
        gutil.log('[webpack]', stats.toString());
    });
});
