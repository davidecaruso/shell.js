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
            include: /\.min\.js$/,
            sourceMap: true,
            uglifyOptions: {
                minimize: true,
                mangle: {
                    reserved: [common.output.library]
                },
                output: {
                    comments: false
                }
            }
        })
    ]
});
