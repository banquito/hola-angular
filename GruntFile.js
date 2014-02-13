module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'app/js/**/*.js']
        },
        karma: {
            unitSingleRun: {
                configFile: 'config/karma.conf.js',
                singleRun: true
            },
            unitBackground: {
                configFile: 'config/karma.conf.js',
                background: true,
            }
        },
        watch: {
            scripts: { files: ['app/js/**/*.js'],
            tasks: ['build'], options: { interrupt: true, }, },
            karma: {
                files: ['app/js/**/*.js', 'test/unit/**/*.js'],
                tasks: ['karma:unitBackground:run']
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('unit-test', ['karma:unitSingleRun']);

    grunt.registerTask('dev', ['build', 'unit-test']);
    grunt.registerTask('dev-watch', ['karma:unitBackground', 'watch']);
    grunt.registerTask('default', ['dev']);
};