module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          base: 'prod/',
          port: 9001,
          keepalive: true
        }
      }
    },
    instrument: {
      files: 'prod/js/main.js',
      options: {
        basePath: 'prod/js/instrumented/',
        flatten: true
      }
    },
    clean: {
      dev: ['prod/']
    },
    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.*'],
          dest: 'prod/'
        }]
      }
    },
    makeReport: {
      src: 'coverage/coverage.json',
      options: {
        type: 'lcov',
        dir: 'coverage'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-istanbul');

  grunt.registerTask('server', ['connect']);
  grunt.registerTask('dev', ['clean','copy','instrument']);
  grunt.registerTask('report', ['makeReport']);
  // Need jasmine-node at global level
};