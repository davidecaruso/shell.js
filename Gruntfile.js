module.exports = function (grunt) {

    /// Switch between production (prod) and development (dev) environment. For production mode run: grunt --prod
    var production = typeof grunt.option("prod") !== "undefined";

    /// Print the current environment
    grunt.log.writeln((production ? "Production" : "Development").rainbow.bold);

    grunt.initConfig({

        /// Load the package.json
        pkg: grunt.file.readJSON("package.json"),

        /// Current date
        date: {
            year: new Date().getFullYear(),
            month: ('January February March April May June July August September October November December').split(' ')[new Date().getMonth()],
            day: new Date().getDate()
        },

        /// Banners
        banners: {
            production: "/**\n" +
                        " * <%= pkg.title %> <%= pkg.version %>\n" +
                        " * <%= pkg.description %>\n" +
                        " * \n" +
                        " * Copyright (c) <%= date.year %>, <%= pkg.author %>\n" +
                        " * Licensed under <%= pkg.license %>\n" +
                        " * \n" +
                        " * Released on <%= date.month %> <%= date.day %>, <%= date.year %>\n" +
                        " */\n",
            development: "<%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd HH:MM:ss') %>"
        },

        /// Minify javascript files with UglifyJS
        uglify: {
            options: {
                banner: production ? "<%= banners.production %>" : "console.log('<%= banners.development %>');\n",
                mangle: production,
                beautify: !production
            },
            build: {
                files: [{
                    'dist/js/shell.min.js': 'src/js/shell.js',
                    'dist/js/jquery.shell.min.js': 'src/js/jquery.shell.js'
                }]
            }
        },

        /// Validate files with JSHint
        jshint: {
            all: ["Gruntfile.js", "src/js/**/*.js"]
        },

        /// Compile Sass to CSS using Compass
        compass: {
            compile: {
                options: {
                    banner: production ? "<%= banners.production %>" : "/* <%= banners.development %> */",
                    specify: "src/sass/shell.min.sass",
                    sassDir: "src/sass",
                    cssDir: "dist/css",
                    imagesDir: "images",
                    javascriptsDir: "dist/js",
                    generatedImagesDir: "images/sprites",
                    relativeAssets: true,
                    require: ["compass/import-once/activate"],
                    environment: production ? "production" : "development",
                    outputStyle: production ? "compressed" : "expanded",
                    noLineComments: production,
                    force: production
                }
            }
        },

        /// Clean files and folders
        clean: ["*.DS_Store", "**/*.DS_Store"],

        /// Run predefined tasks whenever watched file patterns are added, changed or deleted
        watch: {
            default: {
                files: ["Gruntfile.js"],
                tasks: ["default"]
            },
            js: {
                files: "src/js/**/*.js",
                tasks: ["jshint", "uglify"]
            },
            sass: {
                files: ["src/sass/**/*.sass"],
                tasks: ["compass"]
            },
            clean: {
                files: [".DS_Store", "**/.DS_Store"],
                tasks: ["clean"]
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask("default", ["uglify", "compass", "clean", "watch"]);

};