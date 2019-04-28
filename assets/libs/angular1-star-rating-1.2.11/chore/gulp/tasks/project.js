/**
 * main.js
 *
 * This file requires following npm modules:
 * ``
 * npm install gulp gulp-run-sequence merge-stream gulp-inject --save-dev
 * ``
 *
 * This files bundles several tasks from the tasks folder
 *
 *
 */

'use strict';
var $ = require('gulp-load-plugins')();

var gulp = require('gulp'),
    path = require('path'),
    config = require('../../chore.config'),
  helper = require('../helper'),
  merge = require('merge-stream');

var autogeneratedFolders = ['sc5-styleguide'];

//////////////////

//clean all but lib folder in www
gulp.task('project:bundle',['ts:compile'], function (done) {

  var files = [config.dist+'/js/*.js'];
  helper.log('create bundle of '+files);
  return gulp.src(files)
      .pipe($.concat('starRating.js'))
      .pipe($.uglify())
      .pipe(gulp.dest(config.dist), done)

});


//clean all but lib folder in www
gulp.task('project:clean', function (done) {
  helper.log('delete all autogenerated files and folders');
  return helper.clean([autogeneratedFolders], done);
});

//helper for development
gulp.task('project:update-example', function (done) {
  var destination = path.join('examples','angular1', 'node_modules', 'angular1-star-rating', 'dist' );
  helper.log('update lib in example. copy ' + config.dist + ' to ' + destination);
  return gulp.src('./'+config.dist+'/*')
      .pipe(gulp.dest(destination), done);
});