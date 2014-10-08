module.exports = function(grunt) {

    // Project configuration.
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
            dev: {
                options: {
                    build: false
                }
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

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};