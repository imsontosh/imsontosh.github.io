var gulp = require("gulp"),
  connect = require("gulp-connect"),
  gp_concat = require("gulp-concat"),
  concatCss = require("gulp-concat-css");
(gp_rename = require("gulp-rename")), (gp_uglify = require("gulp-uglify"));

gulp.task("js-fef", function() {
  return gulp
    .src([
      "assets/plugins/jquery-1.11.3.min.js",
      "assets/plugins/bootstrap/js/bootstrap.min.js",
      "assets/plugins/es6-promise.min.js",
      "assets/plugins/fetch.min.js",
      "assets/plugins/github-calendar.min.js",
      "assets/plugins/mustache.min.js",
      "assets/plugins/github-activity/src/github-activity.js",
      "assets/js/main.js"
    ])
    .pipe(gp_concat("concat.js"))
    .pipe(gulp.dest("dist"))
    .pipe(gp_rename("bundle.js"))
    .pipe(gp_uglify())
    .pipe(gulp.dest("dist"));
});

gulp.task("mincss", function() {
  return gulp
    .src([
      "assets/plugins/bootstrap/css/bootstrap.min.css",
      "assets/plugins/github-activity/src/github-activity.css",
      "assets/css/styles.css",
      "assets/plugins/github-calendar/dist/github-calendar.css"
    ])
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest("dist/"));
});

gulp.task("connect", function() {
  connect.server({
    root: ".",
    livereload: true,
    port: 8081
  });
});

gulp.task("html", function() {
  gulp.src("./src/*.html").pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch(["./src/*.html"], ["html"]);
});

gulp.task("default", ["connect", "watch"]);
gulp.task("build", ["js-fef", "mincss"]);

