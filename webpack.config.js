/// Requires
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg = require('./package.json');

/// Environment
const env = process.env.NODE_ENV || 'dev';
const build = env === 'build';
const dist = __dirname + '/dist';
const src = __dirname + '/src';

/// Library info
const library = 'Shell';
const filename = library.toLowerCase();
const banner = `${pkg.name} - ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
URL: ${pkg.homepage}
License(s): ${pkg.license}`;

let plugins = [
  new webpack.BannerPlugin(banner),
];
let outputFilename;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({
    minimize: true,
    sourceMap: true,
    mangle: {
      except: ['Shell']
    }
  }));
  outputFilename = `${filename}.min.js`;
} else {
  outputFilename = `${filename}.js`;
}


/// Export Webpack config
module.exports = {
  devtool: 'nosources-source-map',
  entry:   [`${src}/js/${filename}.js`/*, `${src}/sass/${filename}.scss`*/],
  output:  {
    path:           dist,
    filename:       outputFilename,
    library,
    libraryTarget:  'umd',
    umdNamedDefine: true
  },
  module:  {
    rules: [
      {
        test:    /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:     {
          loader:  'babel-loader',
          options: {presets: ['es2015', 'stage-2']},
        }
      },
      {
        test: /\.scss$/,
        use:  [{
          loader: 'style-loader'
        }, {
          loader:  'css-loader',
          options: {
            minimize:  build,
            sourceMap: !build
          }
        }, {
          loader:  'sass-loader',
          options: {
            data:         `$env: ${env}`,
            sourceMap:    !build,
            includePaths: ['node_modules/compass-mixins/lib']
          }
        }],
      }
    ]
  },
  plugins
};