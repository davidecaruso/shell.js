module.exports = function (grunt) {

    /// Switch between production (prod) and development (dev) environment. For production mode run: grunt --prod
    var production = typeof grunt.option("prod") !== "undefined";

    /// Print the current environment
    grunt.log.writeln((production ? "Production" : "Development").rainbow.bold);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        /// Minify javascript files with UglifyJS
        uglify: {
            options: {
                banner: production ?
                "/**\n" +
                " * <%= pkg.title %>\n" +
                " * @author <%= pkg.author %>\n" +
                " * @description <%= pkg.description %>\n" +
                " */\n"
                    :
                    "console.log('<%= pkg.name %> <%= grunt.template.today(\'yyyy-mm-dd HH:MM:ss\') %>');\n",
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
                    sassDir: "src/sass",
                    cssDir: "dist/css",
                    imagesDir: "images",
                    javascriptsDir: "dist/js",
                    generatedImagesDir: "images/sprites",
                    relativeAssets: true,
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