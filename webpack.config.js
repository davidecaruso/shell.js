// Libs
const webpack = require('webpack');
const path = require('path');
const package = require('./package.json');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Environment
const env = process.env.NODE_ENV || 'dev';
const root = path.resolve(__dirname);
const destination = `${root}/lib`;
const source = `${root}/src`;

// Library
const library = 'Shell';
const libraryLowercase = library.toLowerCase();
const filename = `${libraryLowercase}${(env === 'prod' ? '.min' : '')}.js`;
const banner = `${package.name} - ${package.description}
Author: ${package.author}
Version: v${package.version}
URL: ${package.homepage}
License(s): ${package.license}`;

// Plugins
let plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer(),
      ]
    }
  })
];

// If is build environment
if (env === 'build') {
  plugins.push(new UglifyJsPlugin({
    minimize:  true,
    sourceMap: true,
    mangle:    {
      except: [library]
    },
    output: {
      comments: false
    }
  }));
}

// Add banner
plugins.push(new webpack.BannerPlugin(banner));

// Export Webpack config
module.exports = {
  // devtool: 'nosources-source-map',
  entry:   [`${source}/sass/${libraryLowercase}.scss`, `${source}/js/${libraryLowercase}.js`],
  output:  {
    path: destination,
    filename,
    library,
    libraryTarget:  'umd',
    umdNamedDefine: true,
    publicPath: destination
  },
  module:  {
    rules: [
      {
        test:    /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:     [
            {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
        ]
      }, {
        test: /\.scss$/,
        use:  [
          'universal-style-loader',
          'css-loader',
          {
            loader:  'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          'sass-loader'
        ]
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use:  {
          loader:  'url-loader',
          options: {
            limit: 10000,
            name:  'assets/fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins
};
