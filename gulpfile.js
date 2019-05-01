const{src,dest,series,parallel,watch} = require('gulp');
const minifyCSS = require('gulp-csso');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const browsersync = require ('browser-sync').create();

function css() {
    return src('css/*.css')
        .pipe(minifyCSS())
        .pipe(rename(function(path){
           path.extname= '.min.css';
        }))
        .pipe(dest('build/css'));
}

function js() {
    return src('js/*.js')
        .pipe(terser())
        .pipe(rename(function(path){
            path.extname= '.min.js';
         }))
        .pipe(dest('build/js'));
}
function liveReload(){
    browsersync.init({
        server: {
            baseDir:"./"
        }

    });
}
function defaultTask(done){
    browsersync.defaultTask();
    done();
}
watch('*', parallel (css,js,defaultTask));

exports.default = parallel(css,js,liveReload);


