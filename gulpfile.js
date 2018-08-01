var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
  console.log('Horray');
});

gulp.task('html', function(){
  console.log('imagine some useful html here');
});

gulp.task('styles', function(){
  console.log('imagine postcss or sass tasks running here');
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });

});
