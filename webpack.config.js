const webpack = require('webpack');
const library = 'shell';
const src = __dirname + '/src';
const dist = __dirname + '/dist';
const pkg = require("./package.json");
const env = process.env.NODE_ENV || 'development';
const production = env === 'production';
const banner = `${pkg.name} - ${pkg.description}
	Author: ${pkg.author}
	Version: v${pkg.version}
	Url: ${pkg.homepage}
	License(s): ${pkg.license}`;
let plugins = [
  new webpack.BannerPlugin(banner)
];
let rules = [
  {
    test:    /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use:     {
      loader:  'babel-loader',
      options: {presets: ['es2015']},
    }
  },
  // {
  //   test: /\.scss$/,
  //   use:  [
  //     {
  //       loader: "style-loader" // creates style nodes from JS strings
  //     },
  //     {
  //       loader: "css-loader", // translates CSS into CommonJS
  //       options: {
  //         sourceMap: true
  //       }
  //     },
  //     {
  //       loader:       "sass-loader", // compiles Sass to CSS
  //       options: {
  //         data: "$env: " + process.env.NODE_ENV + ";",
  //         sourceMap: true,
  //         includePaths: ['node_modules/compass-mixins/lib']
  //       }
  //     }
  //   ],
  // }
];


if (production) {
  // Production plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  );

  // Production rules
  rules.push(
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader',
      }),
    }
  );
} else {
  // Development plugins
  plugins.push(new webpack.HotModuleReplacementPlugin());

  // Development rules
  rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'postcss-loader',
        'sass-loader',
      ],
    }
  );
}

module.exports = {
  devtool: production ? 'eval' : 'source-map',
  entry:   `${src}/js/${library}.js`,
  output:  {
    path:           `${dist}/js`,
    filename:       `${library}.min.js`,
    library:        library,
    libraryTarget:  'umd',
    umdNamedDefine: true
  },
  module:  {
    rules: rules
  },
  plugins: plugins
};