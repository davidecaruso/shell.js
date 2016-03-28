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
        },
        intern: {
            local: {
                options: {
                    runType: 'runner',
                    config: 'tests/intern.local',
                },
                functional: {
                },
            },
            browserstack: {
                options: {
                    runType: 'runner',
                    config: 'tests/intern',
                },
                functional: {
                },
            }
        },
        run: {
            options: {
                wait: false
            },
            webdriver: {
                cmd: 'chromedriver',
                args: [
                    '--port=4444',
                    '--url-base=wd/hub'
                ]
            },
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("intern");
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask("default", ["uglify", "compass:dist", "clean", "watch"]);
    grunt.registerTask("test-local", ["run:webdriver", "intern:local:functional",'stop:webdriver']);
    grunt.registerTask("test", ["intern:browserstack:functional"]);

};
