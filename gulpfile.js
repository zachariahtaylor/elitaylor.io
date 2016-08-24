var gulp = require('gulp')
var exec = require('child_process').exec

gulp.task('default', ['watch', 'server']);

gulp.task('server', function () {

  exec('node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
  /*exec('mongod --dbpath ./data', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });*/
})

gulp.task('compile', function(){
  console.log("Compile Event");

  return exec('tsc ts/app.ts ts/controller.ts ts/directive.ts', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

gulp.task('move', function(){
  console.log("Move Event");
  return gulp.src('ts/*.js').pipe(gulp.dest('public/js/angular'));
});

gulp.task('watch', function(){
  gulp.watch('ts/*.ts', ['compile', 'move']);
});