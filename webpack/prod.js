const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
    output: {
        filename: '[name].min.js',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    mode: 'production',
});
