module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        uglify: {
            options: {
                banner: '/**\n' +
                ' * <%= pkg.title %>\n' +
                ' * @author <%= pkg.author %>\n' +
                ' * @description <%= pkg.description %>\n' +
                ' */\n'
            },
            build: {
                files: [{
                    'dist/js/shell.min.js': 'src/js/shell.js',
                    'dist/js/jquery.shell.min.js': 'src/js/jquery.shell.js'
                }]
            }
        },

        compass: {
            options: { config: 'config.rb' },
            dev: {
                environment: 'development'
            },
            dist: {
                environment: 'production'
            }
        },

        clean: [".DS_Store", "**/.DS_Store"],

        watch: {
            js: {
                files: 'src/js/**/*.js',
                tasks: ['uglify']
            },
            css: {
                files: ['src/sass/**/*.sass'],
                tasks: ['compass:dist']
            },
            ds_store: {
                files: [".DS_Store", "**/.DS_Store"],
                tasks: ["clean"]
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["uglify", "compass:dist", "clean", "watch"]);

};