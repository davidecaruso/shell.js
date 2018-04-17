const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    output: {
        filename: '[name].min.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJSPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
            mangle: {
                except: [common.output.library]
            },
            output: {
                comments: false
            }
        })
    ]
});
