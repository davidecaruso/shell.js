const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const source = '../src';
const destination = '../lib';

// Library
const library = 'Shell';
const bundle = library.toLowerCase();
const entry = {};
entry[bundle] = [
    `${path.join(__dirname, source)}/sass/main.scss`,
    `${path.join(__dirname, source)}/js/main.ts`
];

// Export Webpack config
module.exports = {
    devtool: 'nosources-source-map',
    entry,
    output: {
        path: path.join(__dirname, destination),
        filename: `[name].js`,
        library,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: 'ts-loader',
            }, {
                test: /\.scss$/,
                use: [
                    'universal-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer(),
                ]
            }
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
};
