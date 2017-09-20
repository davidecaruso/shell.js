/// Requires
const webpack = require('webpack');
const pkg = require('./package.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
let outputFilename = `${filename}.js`;

/// Plugins
let plugins = [
  new webpack.BannerPlugin(banner),
];

/// If is build environment
if (env === 'build') {
  plugins.push(new UglifyJsPlugin({
    minimize:  true,
    sourceMap: true,
    mangle:    {
      except: ['Shell']
    }
  }));
  outputFilename = `${filename}.min.js`;
}

/// Export Webpack config
module.exports = {
  devtool: 'nosources-source-map',
  entry:   [`${src}/sass/${filename}.scss`, `${src}/js/${filename}.js`],
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
        use:  [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins
};