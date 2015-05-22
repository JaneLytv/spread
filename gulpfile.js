var gulp = require('gulp');
var sass = require ('gulp-sass');
var concat = require ('gulp-concat');
var notify = require("gulp-notify");


gulp.task('styles', function (){
	return gulp.src('*.scss')
			.pipe(sass({
			'sourcemap=none': true,
			errLogToConsole: true
				}))
			.on("error", notify.onError(function (error) {
			return "Message to the notifier: " + error.message;
 				}))
			.pipe(concat('style.css'))
			.pipe(gulp.dest('.'))
			.pipe(notify('Sass done'));
});


// gulp.task('notify', function () {
// 	gulp.src("styles/*.scss")
//   		.pipe(notify("Error: <%= error.message %>"))
//    .pipe(through(function () {
//         this.emit("error", new Error("Something happend: Error message!"))
//       }))
//       .on("error", notify.onError(function (error) {
//         return "Message to the notifier: " + error.message;
//       }));
//   });

gulp.task('default',function(){
	gulp.watch('*.scss',['styles'])
});