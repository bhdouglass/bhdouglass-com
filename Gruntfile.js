'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      js: {
        files: ['src/assets/js/*.js'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      styles: {
        files: ['src/assets/css/*.css'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js'],
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'src/index.html',
          'src/pebble/*.html',
          'src/remindor/*.html',
          'src/assets/css/*.css',
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729,
        base: 'src',
      },
      livereload: {
        options: {
          open: true,
        }
      }
    }
  });

  grunt.registerTask('serve', 'Serve web app', [
    'connect:livereload',
    'watch'
  ]);
};
