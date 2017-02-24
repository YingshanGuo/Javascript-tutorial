var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var srcBase = "../static";
var distBase = "../../dist/static";
var releaseBase = "../../release";

//清除所有
gulp.task("clean", function () {
    return gulp.src(distBase, {
        read: false,
    }).pipe(plugins.clean());
});

//----------------------------------------------------------------------------------------------------------------------

// 处理less文件
gulp.task('styleLess', function () {
    return gulp.src(srcBase + '/css/*.less', {"base": srcBase})
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.minifyCss({compatibility: 'ie7'}))
        .pipe(gulp.dest(distBase));
});

// 处理css文件
gulp.task('cpcss', function () {
    return gulp.src(srcBase + '/css/*.css', {"base": srcBase})
        .pipe(plugins.minifyCss({compatibility: 'ie7'}))
        .pipe(gulp.dest(distBase));
});

// 处理font/文件
gulp.task('cpfont', function () {
    return gulp.src(srcBase + '/fonts/*', {"base": srcBase})
        .pipe(plugins.plumber())
        .pipe(gulp.dest(distBase));
});


//----------------------------------------------------------------------------------------------------------------------

//清除图片
gulp.task("cleanImages", function () {
    return gulp.src([distBase + "/images"], {read: false})
        .pipe(plugins.clean());

});

// 处理图片
gulp.task('images', ['cleanImages'], function () {
    return gulp.src(srcBase + '/images/**', {"base": srcBase})
    // .pipe(plugins.changed(distBase+"/images"))
        .pipe(plugins.plumber())
        // .pipe(plugins.imagemin())
        .pipe(gulp.dest(distBase));
});

// 清除背景图片
gulp.task("cleanBgImages", function () {
    return gulp.src([distBase + "/bg"], {read: false})
        .pipe(plugins.clean());
});


// 处理背景图片
gulp.task('bgImages', ['cleanBgImages'], function () {
    return gulp.src(srcBase + '/bg/**', {"base": srcBase})
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true,
            multipass: true,
        }))
        .pipe(gulp.dest(distBase));
});

//----------------------------------------------------------------------------------------------------------------------

//
gulp.task('cssSprite', ['styleLess', 'bgImages'], function () {
    return gulp.src([distBase + '/css/*.css']).pipe(plugins.cssSpritesmith({
        // sprite背景图源文件夹，只有匹配此路径才会处理，
        imagepath: distBase + '/bg',
        // 映射CSS中背景路径，支持函数和数组，默认为 null
        imagepath_map: null,
        // 雪碧图输出目录，注意，会覆盖之前文件！
        spritedest: distBase + '/css_bg',
        // 替换后的CSS背景路径，默认 ../images/
        spritepath: '../css_bg',
        // 各图片间间距，如果设置为奇数，会强制+1以保证生成的2x图片为偶数宽高，默认 0
        padding: 10,
        // 是否以时间戳为文件名生成新的雪碧图文件，如果启用请注意清理之前生成的文件，默认不生成新文件
        newsprite: false,
        // 给雪碧图追加时间戳，默认不追加
        spritestamp: true,
        // 在CSS文件末尾追加时间戳，默认不追加
        cssstamp: false
    }))
        .pipe(gulp.dest('./'));
});

//----------------------------------------------------------------------------------------------------------------------

//处理外部JS无需压缩
gulp.task('jsPlugins', function () {
    return gulp.src(
        [
            srcBase + '/js/plugins/**',
            srcBase + '/js/common/+(jquery*|angular*|bootstrap*).js',
            srcBase + '/js/common/angular/**'
        ],
        {base: srcBase}
    )
        .pipe(gulp.dest(distBase))
});

//处理自定义JS
gulp.task('js', function () {
    return gulp.src([srcBase + '/js/!(plugins)/!(jquery*|angular*|bootstrap*).js', srcBase + '/js/*.js'], {base: srcBase})
        .pipe(plugins.changed(srcBase + "/js"))
        // .pipe(plugins.uglify({ mangle: true, compress: true}))
        // .pipe(plugins.debug({title: '编译:'}))
        // .pipe(plugins.obfuscate())
        .pipe(gulp.dest(distBase))
});

//----------------------------------------------------------------------------------------------------------------------

// 处理 login home resource html文件
gulp.task('mainHtml', function () {
    return gulp.src(srcBase + '/*.html')
    // .pipe(plugins.plumber())
        .pipe(plugins.fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(distBase));
});

// 处理ng-view的html文件
gulp.task('viewHtml', ['cleanViewHtml'], function () {
    return gulp.src(srcBase + '/view/*.html')
    // .pipe(plugins.plumber())
        .pipe(plugins.fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(distBase + '/view'));
});

// 清除ng-view的html文件
gulp.task("cleanViewHtml", function () {
    return gulp.src(distBase + '/view')
        .pipe(plugins.clean());
});

//----------------------------------------------------------------------------------------------------------------------

gulp.task('default', ['clean'], function () {
    gulp.start('images', 'cssSprite', 'js', 'jsPlugins', 'mainHtml', 'viewHtml', 'cpcss', 'cpfont');
});

// 发布到release目录
gulp.task('release', ['default'], function () {
    return gulp.src([distBase + '/*', distBase + "d/**/*"]).pipe(plugins.plumber()).pipe(gulp.dest(releaseBase));
});
