const gulp = require('gulp');
const playcanvas = require('gulp-playcanvas');
const pcOptions = require('./playcanvas.json');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const PlayCanvasNode = require('playcanvas-node').default;

const paths = {
  js: {
    src: 'src/**/*.js',
  },
  sass: {
    src: 'src/**/*.+(scss|sass)',
  },
  pug: {
    src: 'src/**/*.pug',
  },
};

const html = () => {
  return gulp
    .src(paths.pug.src)
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
    .pipe(playcanvas(pcOptions));
};

const js = () => {
  return gulp
    .src(paths.js.src, {
      since: gulp.lastRun(js),
    })
    .pipe(gulp.dest('dist/'))
    .pipe(playcanvas(pcOptions));
};

const css = () => {
  return gulp
    .src(paths.sass.src)
    .pipe(sass())
    .pipe(gulp.dest('dist/'))
    .pipe(playcanvas(pcOptions));
};

//jsの結合
const concatjs = async () => {
  const order = require('./dist/photon_test/config.json').application_properties
    .scripts;
  const node = new PlayCanvasNode(pcOptions);
  const assetList = await node.getListAssets();
  // アセット情報からディレクトリパスを取得
  async function _getPath(asset) {
    let path = asset.name;
    let parentId = asset.parent;
    while (parentId) {
      let _asset = assetList.find((x) => x.id === parentId);

      path = `${_asset.name}/${path}`;
      parentId = _asset.parent;
    }

    return path;
  }

  let concatFiles = await Promise.all(
    order.map(
      async (x) => 'src/' + (await _getPath(assetList.find((y) => y.id === x)))
    )
  );
  return gulp
    .src(concatFiles)
    .pipe(concat('index.js'))
    .pipe(gulp.dest('build/'));
};

gulp.task('concat', concatjs);

gulp.task('watch', function () {
  gulp.watch(paths.pug.src, html);
  gulp.watch(paths.js.src, js);
  gulp.watch(paths.sass.src, css);
});
gulp.task('default', gulp.parallel('watch'));
