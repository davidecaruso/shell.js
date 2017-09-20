/// Requires
const webpack = require('webpack');
const pkg = require('./package.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/// Environment
const env = process.env.NODE_ENV || 'dev';
const distPath = __dirname + '/dist';
const srcPath = __dirname + '/src';

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
  entry:   [`${srcPath}/sass/${filename}.scss`, `${srcPath}/js/${filename}.js`],
  output:  {
    path:           distPath,
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
          options: {
            presets: ['es2015', 'stage-2']
          }
        }
      },
      {
        test: /\.scss$/,
        use:  [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader:  'sass-loader',
          options: {
            includePaths: ['node_modules/bourbon/app/assets/stylesheets']
          }
        }]
      }
    ]
  },
  plugins
};