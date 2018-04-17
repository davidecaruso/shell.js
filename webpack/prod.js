const webpack = require('webpack');
const merge = require('webpack-merge');
const uglifyjs = require('uglifyjs-webpack-plugin');
const common = require('./common');
const mode = 'production';

module.exports = merge(common.config, {
    output: {
        filename: '[name].min.js'
    },
    plugins: [
        new uglifyjs({
            include: /\.min\.js$/,
            sourceMap: true,
            uglifyOptions: {
                minimize: true,
                mangle: {
                    reserved: [common.config.output.library]
                },
                output: {
                    comments: false
                }
            }
        })
    ],
    mode
});
