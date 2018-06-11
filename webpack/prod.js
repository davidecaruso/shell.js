const uglifyjs = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
    output: {
        filename: '[name].min.js'
    },
    plugins: [
        new uglifyjs({
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
    ],
    mode: 'production'
});
