const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
    devServer: {
        contentBase: './',
    },
    mode: 'development',
});
