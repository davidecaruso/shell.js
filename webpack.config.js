/// Requires
const webpack = require('webpack');
const pkg = require('./package.json');

/// Environment
const env = process.env.NODE_ENV || 'development';
const production = env === 'production';
const dist = __dirname + '/dist';
const src = __dirname + '/src';

/// Library info
const library = 'shell';
const banner = `${pkg.name} - ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
URL: ${pkg.homepage}
License(s): ${pkg.license}`;

/// Export Webpack config
module.exports = {
  devtool: production ? 'source-map' : 'eval',
  entry:   [`${src}/js/${library}.js`, `${src}/sass/${library}.scss`],
  output:  {
    path:           dist,
    filename:       `${library}.min.js`,
    library:        library,
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
          options: {presets: ['es2015', 'stage-2' ]},
        }
      },
      {
        test: /\.scss$/,
        use:  [{
          loader: 'style-loader'
        }, {
          loader:  'css-loader',
          options: {
            minimize:  production,
            sourceMap: !production
          }
        }, {
          loader:  'sass-loader',
          options: {
            data:         '$env: ' + env + ';',
            sourceMap:    !production,
            includePaths: ['node_modules/compass-mixins/lib']
          }
        }],
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
};