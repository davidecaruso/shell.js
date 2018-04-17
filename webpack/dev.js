const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');
const mode = 'development';

module.exports = merge(common.config, {
    devServer: {
        contentBase: './'
    },
    mode
});
