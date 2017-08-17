module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    /// Banners
    banners: {
      dev: "<%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd HH:MM:ss') %>",
      dist: "/**\n" +
           " * <%= pkg.name %> <%= pkg.version %>\n" +
            " * <%= pkg.description %>\n" +
           " * \n" +
           " * Copyright (c) <%= grunt.template.today('yyyy') %>, <%= pkg.author %>\n" +
           " * Licensed under <%= pkg.license %>\n" +
           " * \n" +
           " * Released on <%= grunt.template.today('mmmm') %> <%= grunt.template.today('dS') %>, <%= grunt.template.today('yyyy') %>\n" +
           " */"
    },

    /// Minify javascript files with UglifyJS
    uglify: {
      dev: {
        options: {
          banner: "console.log('<%= banners.dev %>');",
          mangle: false,
          beautify: true
        },
        files: "<%= uglify.files %>"
      },
      dist: {
        options: {
          banner: "<%= banners.dist %>",
          mangle: true,
          beautify: false
        },
        files: "<%= uglify.files %>"
      },
      files: [{
        'dist/js/shell.min.js': 'src/js/shell.js',
        'dist/js/jquery.shell.min.js': 'src/js/jquery.shell.js'
      }]
    },

    /// Validate files with JSHint
    jshint: {
      all: ["Gruntfile.js", "src/js/**/*.js"]
    },

    /// Install and update npm & bower dependencies.
    auto_install: {
      local: {}
    },


    /// Compile Sass to CSS using Compass
    compass: {
      dev: {
        options: {
          banner: "/* <%= banners.dev %> */",
          specify: ["src/sass/shell.min.scss"],
          sassDir: "src/sass",
          cssDir: "dist/css",
          relativeAssets: true,
          environment: "development",
          outputStyle: "expanded",
          noLineComments: false,
          force: false
        }
      },
      dist: {
        options: {
          banner: "<%= banners.dist %>",
          specify: ["src/sass/shell.min.scss"],
          sassDir: "src/sass",
          cssDir: "css",
          relativeAssets: true,
          environment: "production",
          outputStyle: "compressed",
          noLineComments: true,
          force: true
        }
      }
    },

    /// Run predefined tasks whenever watched file patterns are added, changed or deleted
    watch: {
      default: {
        files: ["Gruntfile.js"],
        tasks: ["default"]
      },
      scripts: {
        files: "src/js/**/*.js",
        tasks: ["changed:jshint:all", "changed:uglify:dev"]
      },
      css: {
        files: ["src/sass/**/*.sass", "src/sass/**/*.scss"],
        tasks: ["compass:dev"]
      },
      autoinstall: {
        files: ["bower.json", "package.json"],
        tasks: ["auto_install"]
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-auto-install');
  grunt.loadNpmTasks('grunt-changed');

  grunt.registerTask("default", ["auto_install", "uglify:dev", "compass:dev", "watch"]);
  grunt.registerTask("deploy", ["uglify:dist", "compass:dist"]);

};