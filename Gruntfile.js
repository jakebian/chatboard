module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'app/public/css/style.css': 'app/scss/style.scss'
                }
            }
        }
    });


    grunt.registerTask('default', ['sass']);
}