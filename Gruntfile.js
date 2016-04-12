module.exports = function(grunt) {


  grunt.initConfig({
    autoprefixer:{
      dist:{
        files:{
          'client/resources/css/style.css':'client/resources/css/style.css'
        }
      }
    },
    watch: {
      css: {
        files: ['client/resources/css/**/*.css'],
        tasks: ['autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};
