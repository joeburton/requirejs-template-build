module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            options: {
                baseUrl: 'js',
                webroot: 'js',
                config: ['main.js'],
                name: 'main',
                require: 'libs/require',
                almond: 'libs/almond',
                includeAlmond: true,
                out: 'build/<%= pkg.name %>.min.js'
            },
            prod: {
                options: {
                    build: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-require');
    grunt.loadNpmTasks('grunt-contrib-uglify');

};