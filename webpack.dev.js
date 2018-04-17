const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './'
    },
    watch: true,
    watchOptions: {
        poll: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});
