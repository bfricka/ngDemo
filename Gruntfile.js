module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    paths: {
      styles: './public/stylesheets'
    }

    , watch: {
      less: {
          files: [ "<%= paths.styles %>/**/*.less" ]
        , tasks: [ "less:development" ]
      }
    }

    , less: {
      development: {
        options: {
            compress        : false
          , yuicompress     : false
          , dumpLineNumbers : 'comments'
        }
        , files: { '<%= paths.styles %>/styles.css': '<%= paths.styles %>/styles.less' }
      }
      , production: {
        options: {
            compress        : false
          , yuicompress     : true
          , dumpLineNumbers : false
        }
        , files: { '<%= paths.styles %>/styles.css': '<%= paths.styles %>/styles.less' }
      }
    }
  });

  grunt.registerTask('default', ["less:production"]);
};