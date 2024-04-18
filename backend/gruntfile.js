module.exports= function(grunt){
    //   configure the tasks.

    grunt.initConfig({
        uglify:{
            options:{
                mangle:false
            },
          target:{
            files:{
                "dest/js/main.min.js":["src/features/director/*.js"]
            }
          }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['uglify']);
}