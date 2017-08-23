var gulp = require("gulp");
var concat = require("gulp-concat");
var insert = require("gulp-insert");
var merge = require("gulp-merge");
var rename = require("gulp-rename");
var watch = require("gulp-watch");
var luaminify = require("gulp-luaminify");
var ghPages = require("gulp-gh-pages");
var fs = require("fs");

var cart_name = "example";

var src_path = "src/";
var asset_path = "src/assets/";
var build_path = "build/";
var dist_path = "dist/";

var build_header = "pico-8 cartridge // http://www.pico-8.com\nversion 8\n__lua__\n"

gulp.task("build", function(){
    var cart = fs.readFileSync(build_path + cart_name + ".p8", "utf8");
    cart_assets = cart.substring(cart.indexOf("__gfx__"));

    merge(
      gulp.src([src_path + "**/*.lua"])
        .pipe(concat(cart_name + ".p8"))
        .pipe(insert.prepend(build_header))
        .pipe(insert.append("\n"))
        .pipe(insert.append(cart_assets))
        .pipe(gulp.dest(build_path)),

      gulp.src([src_path + "**/*.lua"])
        .pipe(concat(cart_name + ".minified.p8"))
        .pipe(luaminify())
        .pipe(insert.prepend(build_header))
        .pipe(insert.append("\n"))
        .pipe(insert.append(cart_assets))
        .pipe(gulp.dest(build_path))
    )

});

gulp.task("watch", function () {
    return watch(src_path + "**/*.lua", function () {
        gulp.start("build");
    });
});

gulp.task("copy-dist-index", function() {
    return gulp.src(build_path + cart_name + ".html")
        .pipe(rename("index.html"))
        .pipe(gulp.dest(dist_path))
});

gulp.task("copy-dist-js", function() {
    return gulp.src(build_path + cart_name + ".js")
        .pipe(gulp.dest(dist_path))
});

gulp.task("deploy", ["copy-dist-index", "copy-dist-js"], function () {
    return gulp.src(dist_path + '**/*')
        .pipe(ghPages());
})

gulp.task("default", ["build", "watch"]);